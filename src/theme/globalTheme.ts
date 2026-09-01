import type {TextStyle, ViewStyle} from 'react-native';
import {font, fontWeight, getFontStyle} from './fonts';

export const colors = {
  primary: '#799175',
  primaryDark: '#627A62',
  primaryLight: '#95AE96',

  secondary: '#083023',
  secondaryDark: '#052018',
  secondaryLight: '#0C3B2E',

  accent: '#B48C5C',
  accentDark: '#9A7042',
  accentLight: '#D4A76A',

  highlight: '#FFBF00',
  highlightDark: '#E6A700',
  highlightLight: '#FFD04D',

  background: '#F9F9F7',
  surface: '#FFFFFF',
  surfaceMuted: '#F0EFEB',

  text: {
    primary: '#083023',
    secondary: '#BB8A52',
    muted: '#8A8A85',
    inverse: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onHighlight: '#083023',
  },

  border: {
    default: '#E5E4DF',
    focus: '#6D9773',
    muted: '#F0EFEB',
  },

  status: {
    success: '#6D9773',
    warning: '#FFBA00',
    error: '#C0392B',
    info: '#083023',
  },

  overlay: 'rgba(8, 48, 35, 0.45)',
  shadow: 'rgba(8, 48, 35, 0.12)',
  transparent: 'transparent',
} as const;

export const fontFamily = {
  body: font.regular,
  heading: font.bold,
  mono: 'Courier',
} as const;

export const fontWeights = fontWeight;

export const fontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const;

export const lineHeight = {
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.65,
  loose: 1.8,
} as const;

export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
  widest: 2,
} as const;

type TypographyVariant = keyof typeof typography;

export const typography = {
  display: {
    ...getFontStyle(fontWeights.bold),
    fontSize: fontSize['5xl'],
    lineHeight: fontSize['5xl'] * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    color: colors.text.primary,
  },
  h1: {
    ...getFontStyle(fontWeights.bold),
    fontSize: fontSize['4xl'],
    lineHeight: fontSize['4xl'] * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    color: colors.text.primary,
  },
  h2: {
    ...getFontStyle(fontWeights.bold),
    fontSize: fontSize['3xl'],
    lineHeight: fontSize['3xl'] * lineHeight.tight,
    color: colors.text.primary,
  },
  h3: {
    ...getFontStyle(fontWeights.semiBold),
    fontSize: fontSize['2xl'],
    lineHeight: fontSize['2xl'] * lineHeight.snug,
    color: colors.text.primary,
  },
  h4: {
    ...getFontStyle(fontWeights.semiBold),
    fontSize: fontSize.xl,
    lineHeight: fontSize.xl * lineHeight.snug,
    color: colors.text.primary,
  },
  h5: {
    ...getFontStyle(fontWeights.medium),
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * lineHeight.normal,
    color: colors.text.primary,
  },
  body: {
    ...getFontStyle(fontWeights.regular),
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    color: colors.text.primary,
  },
  bodySmall: {
    ...getFontStyle(fontWeights.regular),
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    color: colors.text.primary,
  },
  label: {
    ...getFontStyle(fontWeights.medium),
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
    color: colors.text.secondary,
  },
  caption: {
    ...getFontStyle(fontWeights.regular),
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * lineHeight.normal,
    color: colors.text.muted,
  },
  button: {
    ...getFontStyle(fontWeights.semiBold),
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.tight,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase',
    color: colors.text.onPrimary,
  },
  link: {
    ...getFontStyle(fontWeights.medium),
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    color: colors.primary,
  },
} as const satisfies Record<string, TextStyle>;

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
} as const;

export const borderRadius = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 15,
  xl: 20,
  '2xl': 25,
  '3xl': 35,
  full: 9999,
} as const;

export const borderWidth = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  medium: 2,
  thick: 3,
} as const;

export const shadows = {
  none: {},
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 8,
  },
} as const satisfies Record<string, ViewStyle>;

export const components = {
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  } satisfies ViewStyle,

  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius['2xl'],
    padding: spacing.xl,
    ...shadows.md,
  } satisfies ViewStyle,

  input: {
    container: {
      gap: spacing.xs,
    } satisfies ViewStyle,
    field: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.lg,
      borderWidth: borderWidth.thin,
      borderColor: colors.border.default,
      paddingHorizontal: spacing.base,
      paddingVertical: spacing.md,
      ...getFontStyle(fontWeights.regular),
      fontSize: fontSize.base,
      color: colors.text.primary,
    } satisfies TextStyle,
    label: typography.label,
    placeholderColor: colors.text.muted,
  },

  button: {
    primary: {
      backgroundColor: colors.primary,
      borderRadius: borderRadius.lg,
      paddingVertical: spacing.base,
      paddingHorizontal: spacing.xl,
      alignItems: 'center',
      justifyContent: 'center',
    } satisfies ViewStyle,
    primaryText: typography.button,
    secondary: {
      backgroundColor: colors.transparent,
      borderRadius: borderRadius.lg,
      borderWidth: borderWidth.medium,
      borderColor: colors.primary,
      paddingVertical: spacing.base,
      paddingHorizontal: spacing.xl,
      alignItems: 'center',
      justifyContent: 'center',
    } satisfies ViewStyle,
    secondaryText: {
      ...typography.button,
      color: colors.primary,
    } satisfies TextStyle,
    dark: {
      backgroundColor: colors.secondary,
      borderRadius: borderRadius.lg,
      paddingVertical: spacing.base,
      paddingHorizontal: spacing.xl,
      alignItems: 'center',
      justifyContent: 'center',
    } satisfies ViewStyle,
    darkText: typography.button,
    disabled: {
      backgroundColor: colors.surfaceMuted,
      borderRadius: borderRadius.lg,
      paddingVertical: spacing.base,
      paddingHorizontal: spacing.xl,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.6,
    } satisfies ViewStyle,
  },

  badge: {
    highlight: {
      backgroundColor: colors.highlight,
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xxs,
    } satisfies ViewStyle,
    highlightText: {
      ...getFontStyle(fontWeights.semiBold),
      fontSize: fontSize.xs,
      color: colors.text.onHighlight,
    } satisfies TextStyle,
  },

  icon: {
    default: colors.accent,
    active: colors.primary,
    muted: colors.text.muted,
    size: {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
    },
  },

  star: {
    color: colors.highlight,
    size: 14,
  },

  header: {
    dark: {
      backgroundColor: colors.secondary,
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
    } satisfies ViewStyle,
    darkTitle: {
      ...typography.h3,
      color: colors.text.inverse,
    } satisfies TextStyle,
  },
} as const;

export const brand = {
  splashBackground: colors.secondary,
  splashOverlay: colors.secondaryLight,
  splashText: '#F1EFE8',
  splashTagline: 'YOUR PEOPLE. YOUR ROAD. YOUR CHAOS.',
  appIconSize: {
    sm: 48,
    md: 80,
    lg: 120,
    xl: 200,
  },
} as const;

export const globalTheme = {
  colors,
  brand,
  fontFamily,
  fontWeights,
  fontSize,
  lineHeight,
  letterSpacing,
  typography,
  spacing,
  borderRadius,
  borderWidth,
  shadows,
  components,
} as const;

export type GlobalTheme = typeof globalTheme;
export type ThemeColors = typeof colors;
export type ThemeTypography = typeof typography;
export type ThemeSpacing = typeof spacing;

export function textStyle(
  variant: TypographyVariant,
  overrides?: TextStyle,
): TextStyle {
  return {...typography[variant], ...overrides};
}
