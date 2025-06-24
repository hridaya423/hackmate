import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const slackUserCache = new Map<string, string>();

export async function resolveSlackUsername(slackId: string): Promise<string> {
  if (slackUserCache.has(slackId)) {
    return slackUserCache.get(slackId)!;
  }
  if (!slackId.match(/^U[A-Z0-9]+$/)) {
    return slackId;
  }

  try {
    const response = await fetch(`/api/slack/user?userId=${encodeURIComponent(slackId)}`);

    if (response.ok) {
      const data = await response.json();
      
      if (data.success && data.displayName) {
        slackUserCache.set(slackId, data.displayName);
        return data.displayName;
      } else {
        console.warn(`API returned error for ${slackId}:`, data.error);
      }
    } else {
      console.warn(`API request failed for ${slackId}: ${response.status}`);
    }
  } catch (error) {
    console.warn(`Failed to resolve Slack username for ${slackId}:`, error instanceof Error ? error.message : 'Unknown error');
  }

  slackUserCache.set(slackId, slackId);
  return slackId;
}

export async function resolveSlackUsernames(slackIds: string[]): Promise<Map<string, string>> {
  const results = new Map<string, string>();
  
  const promises = slackIds.map(async (id) => {
    const username = await resolveSlackUsername(id);
    results.set(id, username);
  });
  
  await Promise.all(promises);
  return results;
} 