import AsyncStorage from '@react-native-async-storage/async-storage';

/** Persisted flag marking the user as logged in, so a relaunch skips login. */
const LOGGED_IN_KEY = '@roov/logged-in/v1';

export async function isLoggedIn(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(LOGGED_IN_KEY)) === 'true';
  } catch (error) {
    if (__DEV__) {
      console.warn('[session] failed to read login flag', error);
    }
    return false;
  }
}

export async function markLoggedIn(): Promise<void> {
  try {
    await AsyncStorage.setItem(LOGGED_IN_KEY, 'true');
  } catch (error) {
    if (__DEV__) {
      console.warn('[session] failed to persist login flag', error);
    }
  }
}

export async function clearLoggedIn(): Promise<void> {
  try {
    await AsyncStorage.removeItem(LOGGED_IN_KEY);
  } catch (error) {
    if (__DEV__) {
      console.warn('[session] failed to clear login flag', error);
    }
  }
}
