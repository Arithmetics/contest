import { KeystoneContext } from '@keystone-6/core/types';
import { TypeInfo } from '.keystone/types';
import { Line, Contest } from './codegen/graphql-types';
import { mailOutLineAudit } from './lib/mail';

function createEmailData(line: Line): string[] {
  const data: string[] = ['game, email, selection, isSuper'];
  line.choices?.forEach((choice) => {
    choice?.bets?.forEach((bet) => {
      const betData = [
        line?.title || '',
        bet?.user?.email || '',
        choice?.selection || '',
        bet.isSuper ? 'Yes' : 'No',
      ];
      data.push(betData.join(', '));
    });
  });
  return data;
}

export async function emailAtsAuditTables(
  keyStoneContext: KeystoneContext<TypeInfo>,
  contestId: string
): Promise<void> {
  const graphql = String.raw;

  const contest = (await keyStoneContext.query.Contest.findOne({
    where: { id: contestId },
    query: graphql`
      id
      registrations {
        user {
          id
          email
        }
      }
    `,
  })) as Contest | null;

  const emails = (contest?.registrations
    ?.map((registration) => registration?.user?.email)
    ?.filter((email) => email !== null) ?? []) as string[];

  const linesWithStandings = (await keyStoneContext.query.Line.findMany({
    where: { contest: { id: { equals: contestId } } },
    query: graphql`
        id
        title
        benchmark
        closingTime
        image {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
        choices {
          id
          selection
          isWin
          image {
            image {
              publicUrlTransformed
            }
            altText
          }
          secondaryImage {
            image {
              publicUrlTransformed
            }
            altText
          }
          bets {
            id
            isSuper
            user {
              id
              email
            }
          }
      }
    `,
  })) as Line[] | null;

  const linesThatStartedInLast15Minutes = linesWithStandings?.filter((line) => {
    const now = new Date();
    const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60000);
    return new Date(line.closingTime) > fifteenMinutesAgo;
  });

  const linesWithStandingsAndBets =
    linesThatStartedInLast15Minutes?.map((line) => {
      return createEmailData(line);
    }) ?? [];

  linesWithStandingsAndBets.forEach((betsToPrint) => {
    mailOutLineAudit(betsToPrint, emails ?? []);
  });
}
