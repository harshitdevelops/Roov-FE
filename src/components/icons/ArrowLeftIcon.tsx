import Svg, {Path, type SvgProps} from 'react-native-svg';

type ArrowLeftIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

export function ArrowLeftIcon({
  width = 24,
  height = 24,
  color = '#F1EFE8',
  ...rest
}: ArrowLeftIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M15 5 L8 12 L15 19"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
