import type {TextStyle} from 'react-native';

export const FONT_FAMILY = 'LAT Identity';

const FONT_PREFIX = 'LATIdentity';

const WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

type FontWeightValue = (typeof WEIGHTS)[number];

const WEIGHT_NAMES: Record<FontWeightValue, string> = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

export const FONT_FILES = {
  thin: `${FONT_PREFIX}-Thin`,
  extraLight: `${FONT_PREFIX}-ExtraLight`,
  light: `${FONT_PREFIX}-Light`,
  regular: `${FONT_PREFIX}-Regular`,
  medium: `${FONT_PREFIX}-Medium`,
  semiBold: `${FONT_PREFIX}-SemiBold`,
  bold: `${FONT_PREFIX}-Bold`,
  extraBold: `${FONT_PREFIX}-ExtraBold`,
  black: `${FONT_PREFIX}-Black`,
  thinItalic: `${FONT_PREFIX}-ThinItalic`,
  extraLightItalic: `${FONT_PREFIX}-ExtraLightItalic`,
  lightItalic: `${FONT_PREFIX}-LightItalic`,
  italic: `${FONT_PREFIX}-Italic`,
  mediumItalic: `${FONT_PREFIX}-MediumItalic`,
  semiBoldItalic: `${FONT_PREFIX}-SemiBoldItalic`,
  boldItalic: `${FONT_PREFIX}-BoldItalic`,
  extraBoldItalic: `${FONT_PREFIX}-ExtraBoldItalic`,
  blackItalic: `${FONT_PREFIX}-BlackItalic`,
} as const;

export const font = {
  thin: FONT_FILES.thin,
  extraLight: FONT_FILES.extraLight,
  light: FONT_FILES.light,
  regular: FONT_FILES.regular,
  medium: FONT_FILES.medium,
  semiBold: FONT_FILES.semiBold,
  bold: FONT_FILES.bold,
  extraBold: FONT_FILES.extraBold,
  black: FONT_FILES.black,
  thinItalic: FONT_FILES.thinItalic,
  extraLightItalic: FONT_FILES.extraLightItalic,
  lightItalic: FONT_FILES.lightItalic,
  italic: FONT_FILES.italic,
  mediumItalic: FONT_FILES.mediumItalic,
  semiBoldItalic: FONT_FILES.semiBoldItalic,
  boldItalic: FONT_FILES.boldItalic,
  extraBoldItalic: FONT_FILES.extraBoldItalic,
  blackItalic: FONT_FILES.blackItalic,
} as const;

export const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;

const LAT_IDENTITY_FONT_PREFIXES = [FONT_PREFIX, FONT_FAMILY] as const;

function isLatIdentityFont(fontFamily?: string): boolean {
  if (!fontFamily) {
    return true;
  }

  return LAT_IDENTITY_FONT_PREFIXES.some(prefix => fontFamily.startsWith(prefix));
}

export function normalizeFontWeight(
  weight?: TextStyle['fontWeight'],
): FontWeightValue {
  if (weight == null) {
    return 400;
  }

  if (typeof weight === 'number') {
    return closestWeight(weight);
  }

  if (weight === 'normal') {
    return 400;
  }

  if (weight === 'bold') {
    return 700;
  }

  const parsed = Number.parseInt(weight, 10);

  if (Number.isNaN(parsed)) {
    return 400;
  }

  return closestWeight(parsed);
}

function closestWeight(weight: number): FontWeightValue {
  return WEIGHTS.reduce((closest, current) =>
    Math.abs(current - weight) < Math.abs(closest - weight) ? current : closest,
  );
}

function getFontFileName(weight: FontWeightValue, italic: boolean): string {
  const weightName = WEIGHT_NAMES[weight];

  if (italic) {
    if (weight === 400) {
      return FONT_FILES.italic;
    }

    return `${FONT_PREFIX}-${weightName}Italic`;
  }

  return `${FONT_PREFIX}-${weightName}`;
}

export function resolveFontFamily(
  fontWeightValue?: TextStyle['fontWeight'],
  fontStyle?: TextStyle['fontStyle'],
  explicitFontFamily?: string,
): string {
  if (explicitFontFamily && !isLatIdentityFont(explicitFontFamily)) {
    return explicitFontFamily;
  }

  const weight = normalizeFontWeight(fontWeightValue);
  const italic = fontStyle === 'italic';

  return getFontFileName(weight, italic);
}

export function getFontStyle(
  weight: TextStyle['fontWeight'] = '400',
  italic = false,
): Pick<TextStyle, 'fontFamily' | 'fontWeight' | 'fontStyle'> {
  const resolvedWeight = normalizeFontWeight(weight);

  return {
    fontFamily: getFontFileName(resolvedWeight, italic),
    fontStyle: italic ? 'italic' : 'normal',
  };
}
