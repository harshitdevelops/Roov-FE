import Svg, { Circle, Path, type SvgProps } from 'react-native-svg';
import { colors } from '../../theme';

type GoogleGlyphIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

/** Monoline "G" mark for the social login row. */
export function GoogleGlyphIcon({
  width = 24,
  height = 24,
  color = colors.text.primary,
  ...rest
}: GoogleGlyphIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.5} />
      <Path
        d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
