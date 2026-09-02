import {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getLanguage, type Language, type LanguageKey } from './languages';
import { getStoredLanguage, setStoredLanguage } from './storage';
import {
  translate,
  type TranslationKey,
  type TranslationVars,
} from './translations';

type I18nContextValue = {
  /** The active language descriptor. */
  language: Language;
  /** Translate a key in the active language, filling `{var}` placeholders. */
  t: (key: TranslationKey, vars?: TranslationVars) => string;
  /**
   * Persist a new language and refresh the app. Everything below the provider
   * remounts, so every screen re-reads its copy in the new language.
   */
  setLanguage: (key: LanguageKey) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({ children }: I18nProviderProps) {
  // `null` until the persisted choice has been read — we hold rendering for
  // that one AsyncStorage tick so the first paint is already in-language.
  const [languageKey, setLanguageKey] = useState<LanguageKey | null>(null);

  useEffect(() => {
    let active = true;
    getStoredLanguage().then(key => {
      if (active) {
        setLanguageKey(key);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const setLanguage = useCallback((key: LanguageKey) => {
    // Persist first so a crash mid-refresh still lands on the new language,
    // then swap the key — the `<Fragment key>` below remounts the whole tree.
    setStoredLanguage(key).finally(() => setLanguageKey(key));
  }, []);

  const value = useMemo<I18nContextValue | null>(() => {
    if (languageKey == null) {
      return null;
    }
    const language = getLanguage(languageKey);
    return {
      language,
      t: (key, vars) => translate(language.key, key, vars),
      setLanguage,
    };
  }, [languageKey, setLanguage]);

  if (value == null) {
    return null;
  }

  return (
    <I18nContext.Provider value={value}>
      <Fragment key={value.language.key}>{children}</Fragment>
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an <I18nProvider>');
  }
  return ctx;
}

/** Ergonomic alias for screens that only need `t` and the language controls. */
export function useTranslation() {
  const { t, language, setLanguage } = useI18n();
  return { t, language, setLanguage };
}
