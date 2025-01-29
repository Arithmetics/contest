import NodeCache from 'node-cache';
import { Context } from '.keystone/types';
import { debouncedRefreshCachedContest } from './schemas/Contest';

// Define key prefixes as constants to avoid typos and enable easier changes
export const CACHE_KEYS = {
  CONTEST: 'CONTEST',
} as const;

// Helper function to generate consistent cache keys
export function createCacheKey(prefix: keyof typeof CACHE_KEYS, id: string): string {
  return `${CACHE_KEYS[prefix]}:${id}`;
}

// Helper function to extract ID from cache key
export function extractIdFromKey(key: string): string | null {
  const [prefix, id] = key.split(':');
  console.log('prefix', prefix);
  return id || null;
}

export const cache = new NodeCache({
  stdTTL: 3600, // Default TTL of 1 hour in seconds
  checkperiod: 600, // Check for expired keys every 10 minutes
});

let keystoneContext: Context | null = null;

export function initializeCache(context: Context): void {
  keystoneContext = context;

  // Setup auto-refresh on expiration
  cache.on('expired', async (key: string) => {
    if (!keystoneContext) {
      console.error('No Keystone context available for cache refresh');
      return;
    }

    const [prefix] = key.split(':');
    if (prefix === CACHE_KEYS.CONTEST) {
      const contestId = extractIdFromKey(key);
      if (!contestId) {
        console.error(`Invalid cache key format: ${key}`);
        return;
      }

      console.log(`Cache expired for contest ${contestId}, triggering refresh...`);

      try {
        debouncedRefreshCachedContest(keystoneContext, contestId);
      } catch (error) {
        console.error(`Failed to refresh expired contest ${contestId}:`, error);
      }
    }
  });
}
