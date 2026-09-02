import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Persisted flag for the one-time onboarding walkthrough. Bump the version
 * suffix if the walkthrough content changes enough to warrant re-showing it.
 */
const WALKTHROUGH_COMPLETED_KEY = '@roov/walkthrough-completed/v1';

export async function hasCompletedWalkthrough(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(WALKTHROUGH_COMPLETED_KEY)) === 'true';
  } catch (error) {
    // If storage is unreadable, fail open so onboarding still shows.
    if (__DEV__) {
      console.warn('[walkthrough] failed to read completion flag', error);
    }
    return false;
  }
}

export async function markWalkthroughCompleted(): Promise<void> {
  try {
    await AsyncStorage.setItem(WALKTHROUGH_COMPLETED_KEY, 'true');
  } catch (error) {
    // Non-fatal: the walkthrough simply shows again on next launch.
    if (__DEV__) {
      console.warn('[walkthrough] failed to persist completion flag', error);
    }
  }
}
