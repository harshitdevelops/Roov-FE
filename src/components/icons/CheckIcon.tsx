import Svg, { Path, type SvgProps } from 'react-native-svg';

type CheckIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

export function CheckIcon({
  width = 24,
  height = 24,
  color = '#FFFFFF',
  ...rest
}: CheckIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M5 13 L10 18 L19 6"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
