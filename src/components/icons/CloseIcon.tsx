import Svg, { Path, type SvgProps } from 'react-native-svg';
import { colors } from '../../theme';

type CloseIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

export function CloseIcon({
  width = 24,
  height = 24,
  color = colors.text.primary,
  ...rest
}: CloseIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M18 6L6 18M18 18L6 6"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
