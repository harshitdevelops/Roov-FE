import Svg, { Path, type SvgProps } from 'react-native-svg';
import { colors } from '../../theme';

type ArrowRightIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

/** Shafted right arrow (not a chevron). */
export function ArrowRightIcon({
  width = 24,
  height = 24,
  color = colors.text.primary,
  ...rest
}: ArrowRightIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M18.5 12L4.99997 12"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
