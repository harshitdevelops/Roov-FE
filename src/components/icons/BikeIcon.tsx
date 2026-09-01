import Svg, {Circle, Path, type SvgProps} from 'react-native-svg';

type BikeIconProps = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
};

export function BikeIcon({
  width = 24,
  height = 24,
  color = '#FFFFFF',
  ...rest
}: BikeIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...rest}>
      <Circle cx="5.5" cy="17.5" r="3.5" stroke={color} strokeWidth={1.6} />
      <Circle cx="18.5" cy="17.5" r="3.5" stroke={color} strokeWidth={1.6} />
      <Path
        d="M5.5 17.5 L10 8 L15 8 M10 8 L12 17.5 L15 8 L18.5 17.5 M12 17.5 L18.5 17.5 M8.5 8 H11.2"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
