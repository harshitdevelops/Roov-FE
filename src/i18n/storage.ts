import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_LANGUAGE, isLanguageKey, type LanguageKey } from './languages';

/**
 * Persisted UI language. Bump the version suffix if the `LanguageKey` set
 * changes in a way that should reset everyone to the default.
 */
const LANGUAGE_KEY = '@roov/language/v1';

export async function getStoredLanguage(): Promise<LanguageKey> {
  try {
    const stored = await AsyncStorage.getItem(LANGUAGE_KEY);
    if (isLanguageKey(stored)) {
      return stored;
    }
  } catch (error) {
    if (__DEV__) {
      console.warn('[i18n] failed to read stored language', error);
    }
  }
  return DEFAULT_LANGUAGE;
}

export async function setStoredLanguage(key: LanguageKey): Promise<void> {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, key);
  } catch (error) {
    // Non-fatal: the language just won't survive the next launch.
    if (__DEV__) {
      console.warn('[i18n] failed to persist language', error);
    }
  }
}
