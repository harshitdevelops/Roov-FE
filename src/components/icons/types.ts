import { type SvgProps } from 'react-native-svg';

/**
 * Shared shape for every icon in the codebase, whatever suite it comes from.
 * `size` drives both width and height; `color` maps to the stroke (or fill for
 * solid glyphs). Individual suites extend this with their own extras.
 */
export type IconProps = Omit<SvgProps, 'width' | 'height'> & {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
  /** Stroke / fill colour. Defaults to the theme's primary text colour. */
  color?: string;
  /** Stroke weight for outline glyphs. */
  strokeWidth?: number;
};
