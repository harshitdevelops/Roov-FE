import Svg, { Circle, Path } from 'react-native-svg';

type CompassSolidIconProps = {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
  color?: string;
  /** Colour of the needle cutout. Defaults to white. */
  needleColor?: string;
};

/** Solid (filled) compass glyph — hugeicons' free set only ships stroke icons. */
export function CompassSolidIcon({
  size = 24,
  color = '#083023',
  needleColor = '#FFFFFF',
}: CompassSolidIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={9.5} fill={color} />
      <Path
        d="M15.6 8.4L13.1 13.1L8.4 15.6L10.9 10.9L15.6 8.4Z"
        fill={needleColor}
      />
    </Svg>
  );
}
