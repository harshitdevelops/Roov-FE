import Svg, { Path } from 'react-native-svg';

type NotificationBellIconProps = {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
  color?: string;
};

/** Solid (filled) bell glyph — hugeicons' free set only ships stroke icons. */
export function NotificationBellIcon({
  size = 24,
  color = '#FFFFFF',
}: NotificationBellIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.85 3.5a.75.75 0 00-1.117-1.002A24.223 24.223 0 002.71 5.6a.75.75 0 101.28.786A22.723 22.723 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.117 1.002 22.72 22.72 0 011.86 2.886.75.75 0 101.28-.785 24.222 24.222 0 00-2.023-3.103z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
        fill={color}
      />
    </Svg>
  );
}
