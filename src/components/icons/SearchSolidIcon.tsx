import Svg, { Path } from 'react-native-svg';

type SearchSolidIconProps = {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
  color?: string;
};

/** Solid (filled) magnifying-glass glyph — hugeicons' free set only ships stroke icons. */
export function SearchSolidIcon({
  size = 24,
  color = '#083023',
}: SearchSolidIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        fill={color}
      />
    </Svg>
  );
}
