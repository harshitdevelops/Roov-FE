import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../theme';

type RoovPinLogoProps = {
  width?: number;
  height?: number;
};

export function RoovPinLogo({width = 72, height = 76}: RoovPinLogoProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 190 200">
      <Path
        d="M95 10 C60 10, 30 40, 30 76 C30 114, 68 138, 95 182 C122 138, 160 114, 160 76 C160 40, 130 10, 95 10 Z"
        fill={colors.text.secondary}
      />
      <Circle cx="95" cy="76" r="26" fill={colors.secondaryLight} />
      <Circle cx="95" cy="76" r="10" fill={colors.status.warning} />
    </Svg>
  );
}
