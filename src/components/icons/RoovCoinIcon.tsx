import Svg, { ClipPath, Defs, G, Circle, Path } from 'react-native-svg';

type RoovCoinIconProps = {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
};

export function RoovCoinIcon({ size = 24 }: RoovCoinIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Defs>
        <ClipPath id="roovCoinFace">
          <Circle cx={32} cy={32} r={23} />
        </ClipPath>
      </Defs>
      <Circle cx={32} cy={32} r={30} fill="#F2B705" />
      <Circle
        cx={32}
        cy={32}
        r={28.5}
        fill="none"
        stroke="#C98F00"
        strokeWidth={3}
      />
      <Circle cx={32} cy={32} r={23} fill="#F7C630" />
      <G clipPath="url(#roovCoinFace)">
        <Path
          d="M25 62 C 25 44, 48 43, 32 32 C 16 21, 39 20, 39 2"
          fill="none"
          stroke="#1D262E"
          strokeWidth={10}
        />
        <Path
          d="M25 62 C 25 44, 48 43, 32 32 C 16 21, 39 20, 39 2"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
      </G>
      <Circle
        cx={32}
        cy={32}
        r={23}
        fill="none"
        stroke="#C98F00"
        strokeWidth={1.5}
      />
    </Svg>
  );
}
