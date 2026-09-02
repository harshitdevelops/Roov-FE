import Svg, { Path, type SvgProps } from 'react-native-svg';
import { colors } from '../../../theme';

export type KeylineIconProps = Omit<SvgProps, 'width' | 'height'> & {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
  /** Stroke colour. Defaults to the theme's primary text colour. */
  color?: string;
  /** Keyline weight. Keyline is drawn on a 24 grid with a 2px keyline. */
  strokeWidth?: number;
};

/**
 * Builds a React Native component from Keyline stroke path data. Keyline ships
 * no RN package, so glyphs are vendored: grab the `d` from
 * https://keylineicons.com (or `icons/stroke/<name>.svg` in the
 * keyline-icons/keyline-icons repo) and register it in `./index.ts`.
 */
export function createKeylineIcon(name: string, paths: string | string[]) {
  const d = Array.isArray(paths) ? paths : [paths];

  function KeylineIcon({
    size = 24,
    color = colors.text.primary,
    strokeWidth = 2,
    ...rest
  }: KeylineIconProps) {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {d.map((p, i) => (
          <Path key={i} d={p} />
        ))}
      </Svg>
    );
  }

  KeylineIcon.displayName = `Keyline(${name})`;
  return KeylineIcon;
}
