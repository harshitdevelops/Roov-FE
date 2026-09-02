import Svg, { Path, type SvgProps } from 'react-native-svg';
import { colors } from '../../theme';

type ChevronDownIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

export function ChevronDownIcon({
  width = 24,
  height = 24,
  color = colors.text.primary,
  ...rest
}: ChevronDownIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M18 9C18 9 13.5811 15 12 15C10.4188 15 6 9 6 9"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
