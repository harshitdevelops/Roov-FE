import type {TextStyle} from 'react-native';

/** PostScript / family name registered by LTAIdentity.ttf */
export const FONT_FAMILY = 'LTAIdentity';

const FONT_FILE = FONT_FAMILY;

export const FONT_FILES = {
  regular: FONT_FILE,
  medium: FONT_FILE,
  bold: FONT_FILE,
  italic: FONT_FILE,
} as const;

export const font = {
  regular: FONT_FILES.regular,
  medium: FONT_FILES.medium,
  semiBold: FONT_FILES.medium,
  bold: FONT_FILES.bold,
  italic: FONT_FILES.italic,
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

const LAT_IDENTITY_FONT_PREFIXES = [FONT_FAMILY, 'LAT Identity'] as const;

function isProjectFont(fontFamily?: string): boolean {
  if (!fontFamily) {
    return true;
  }

  return LAT_IDENTITY_FONT_PREFIXES.some(prefix => fontFamily.startsWith(prefix));
}

export function normalizeFontWeight(
  weight?: TextStyle['fontWeight'],
): keyof typeof fontWeight {
  if (weight == null || weight === 'normal') {
    return 'regular';
  }

  if (weight === 'bold') {
    return 'bold';
  }

  const parsed =
    typeof weight === 'number' ? weight : Number.parseInt(weight, 10);

  if (Number.isNaN(parsed)) {
    return 'regular';
  }

  if (parsed >= 700) {
    return 'bold';
  }

  if (parsed >= 600) {
    return 'semiBold';
  }

  if (parsed >= 500) {
    return 'medium';
  }

  return 'regular';
}

export function resolveFontFamily(
  fontWeightValue?: TextStyle['fontWeight'],
  _fontStyle?: TextStyle['fontStyle'],
  explicitFontFamily?: string,
): string {
  if (explicitFontFamily && !isProjectFont(explicitFontFamily)) {
    return explicitFontFamily;
  }

  return FONT_FILE;
}

export function getFontStyle(
  weight: TextStyle['fontWeight'] = '400',
  italic = false,
): Pick<TextStyle, 'fontFamily' | 'fontWeight' | 'fontStyle'> {
  return {
    fontFamily: FONT_FILE,
    fontStyle: italic ? 'italic' : 'normal',
  };
}
