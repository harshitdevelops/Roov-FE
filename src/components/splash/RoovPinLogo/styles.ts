import {colors} from '../../../theme';

/**
 * RoovPinLogo is a pure SVG mark with no view-level styles; its visual styling
 * is the fill palette below.
 */
export const palette = {
  pin: colors.text.secondary,
  ringOuter: colors.secondaryLight,
  ringInner: colors.status.warning,
} as const;
