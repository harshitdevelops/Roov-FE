/**
 * Every language the app ships copy for. `key` is what gets persisted to
 * AsyncStorage and used to look up a dictionary in `translations.ts`.
 * `nativeLabel` is what the user sees in the picker / on the CTA.
 */
export type LanguageKey = 'en' | 'hi' | 'kn' | 'ta' | 'te' | 'bn' | 'zh' | 'es';

export type Language = {
  key: LanguageKey;
  /** English name, for accessibility labels and search. */
  label: string;
  /** Endonym — how the language names itself. */
  nativeLabel: string;
};

export const LANGUAGES: readonly Language[] = [
  { key: 'en', label: 'English', nativeLabel: 'English' },
  { key: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { key: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { key: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { key: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { key: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { key: 'zh', label: 'Chinese', nativeLabel: '中文' },
  { key: 'es', label: 'Español', nativeLabel: 'Español' },
] as const;

export const DEFAULT_LANGUAGE: LanguageKey = 'en';

export function isLanguageKey(value: unknown): value is LanguageKey {
  return (
    typeof value === 'string' && LANGUAGES.some(lang => lang.key === value)
  );
}

export function getLanguage(key: string | null | undefined): Language {
  return LANGUAGES.find(lang => lang.key === key) ?? LANGUAGES[0];
}
