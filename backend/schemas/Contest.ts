import { integer, relationship, select, text } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { isAdmin } from '../keystoneTypeAugments';
import { Lists } from '.keystone/types';
import { cache } from '../cache';
import { Context } from '.keystone/types';
import { CONTEST_FIELDS } from '../../components/contestQueries';

const refreshTimeouts: Record<string, NodeJS.Timeout> = {};

export enum RootContestType {
  NBA_OVER_UNDER = 'NBA_OVER_UNDER',
  NFL_OVER_UNDER = 'NFL_OVER_UNDER',
  NFL_ATS = 'NFL_ATS',
  NBA_PLAYOFFS = 'NBA_PLAYOFFS',
}

export async function getCachedContest(
  context: Context,
  id: string
): Promise<Lists.Contest | null> {
  const cacheKey = `contest:${id}`;

  if (cache[cacheKey]) {
    console.log(`Cache hit for contest ${id}`);
    return cache[cacheKey];
  }

  console.log(`Cache miss for contest ${id}`);
  const contest = await context.query.Contest.findOne({
    where: { id },
    query: CONTEST_FIELDS,
  });

  if (contest) {
    cache[cacheKey] = contest;
  }

  return contest as Lists.Contest;
}

export async function refreshCachedContest(
  context: Context,
  id: string
): Promise<Lists.Contest | null> {
  const cacheKey = `contest:${id}`;

  const contest = await context.query.Contest.findOne({
    where: { id },
    query: CONTEST_FIELDS,
  });

  if (contest) {
    cache[cacheKey] = contest;
  } else {
    cache[cacheKey] = null;
  }

  return contest as Lists.Contest;
}

export function debouncedRefreshCachedContest(context: Context, id: string): void {
  const cacheKey = `contest:${id}`;

  // Clear existing timeout if there is one
  if (refreshTimeouts[cacheKey]) {
    clearTimeout(refreshTimeouts[cacheKey]);
  }

  // Set new timeout
  refreshTimeouts[cacheKey] = setTimeout(() => {
    refreshCachedContest(context, id);
    delete refreshTimeouts[cacheKey];
  }, 10000); // 10 seconds
}

export async function initializeContestCache(context: Context): Promise<void> {
  console.log('Starting contest cache initialization...');
  const contests = await context.query.Contest.findMany({
    where: {
      OR: [{ status: { equals: 'OPEN' } }, { status: { equals: 'IN_PROGRESS' } }],
    },
    query: 'id name status',
  });

  console.log(`Found ${contests.length} active contests to cache`);

  // Process sequentially instead of using Promise.all
  for (const contest of contests) {
    const startTime = process.hrtime();
    await refreshCachedContest(context, contest.id);
    const [seconds, nanoseconds] = process.hrtime(startTime);
    const duration = (seconds + nanoseconds / 1e9).toFixed(3);

    console.log(`Cached contest "${contest.name}" (${contest.status}) in ${duration}s`);
  }

  console.log('Contest cache initialization complete');
}

export const Contest: Lists.Contest = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      type: 'enum',
      options: [
        { label: 'Open', value: 'OPEN' },
        { label: 'In Progress', value: 'IN_PROGRESS' },
        { label: 'Complete', value: 'COMPLETE' },
      ],
      validation: {
        isRequired: true,
      },
      defaultValue: 'OPEN',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    entryFee: integer(),
    contestType: select({
      type: 'enum',
      options: [
        { label: 'NBA Over Under', value: RootContestType.NBA_OVER_UNDER },
        { label: 'NFL Over Under', value: RootContestType.NFL_OVER_UNDER },
        { label: 'NFL ATS', value: RootContestType.NFL_ATS },
        { label: 'NBA Playoffs', value: RootContestType.NBA_PLAYOFFS },
      ],
      validation: {
        isRequired: true,
      },
    }),
    image: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    lines: relationship({ ref: 'Line.contest', many: true }),
    registrations: relationship({ ref: 'Registration.contest', many: true }),
    ruleSet: relationship({ ref: 'RuleSet.contest', many: false }),
    winner: relationship({ ref: 'User', many: false }),
  },
});
