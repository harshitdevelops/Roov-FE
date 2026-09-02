import { HugeiconsIcon, type HugeiconsProps } from '@hugeicons/react-native';
import { colors } from '../../../theme';

export type HugeIconProps = Omit<HugeiconsProps, 'size' | 'color'> & {
  /** Square edge length in px. Defaults to 24. */
  size?: number;
  /** Stroke colour. Defaults to the theme's primary text colour. */
  color?: string;
};

/**
 * Themed wrapper around Hugeicons' renderer. Pass icon *data* imported from
 * `@hugeicons/core-free-icons` — one icon per subpath, NOT from the package
 * barrel. Metro doesn't tree-shake, so `import {X} from '@hugeicons/core-free-icons'`
 * drags all ~6k icon modules into the graph and hangs the bundler at 99%.
 *
 * ```tsx
 * import {HugeIcon} from '../components/icons';
 * import Notification03Icon from '@hugeicons/core-free-icons/Notification03Icon';
 *
 * <HugeIcon icon={Notification03Icon} />
 * ```
 *
 * For extra styles (solid, duotone, twotone, bulk, sharp) swap the pack for a
 * Hugeicons Pro package — the renderer stays the same.
 */
export function HugeIcon({
  size = 24,
  color = colors.text.primary,
  strokeWidth = 1.5,
  ...rest
}: HugeIconProps) {
  return (
    <HugeiconsIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      {...rest}
    />
  );
}

export { HugeiconsIcon };
export type { HugeiconsProps, IconSvgElement } from '@hugeicons/react-native';
