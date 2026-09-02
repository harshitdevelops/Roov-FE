import { forwardRef } from 'react';
import {
  MorphIcon as BaseMorphIcon,
  type MorphHandle,
  type MorphIconProps as BaseMorphIconProps,
} from 'morphicons/react-native';
import { colors } from '../../../theme';

export type MorphIconProps = BaseMorphIconProps;
export type { MorphHandle };

/** Unstyled renderer, if you need to bypass the theme defaults. */
export { BaseMorphIcon as MorphIconRaw };

/**
 * Themed wrapper around morphicons' React Native renderer. morphicons animates
 * one stroke glyph into another with spring physics; it consumes icon *data*
 * (not components), so import glyphs from `lucide`:
 *
 * ```tsx
 * import {MorphIcon} from '../components/icons';
 * import {Menu, X} from 'lucide';
 *
 * // uncontrolled: change the prop, it animates
 * <MorphIcon icon={open ? X : Menu} />
 *
 * // controlled: drive `progress` (0..1) from a gesture / scroll
 * <MorphIcon from={Menu} to={X} progress={drag} />
 * ```
 *
 * Any 24x24 stroke set works as a data source (Tabler, Heroicons, Iconoir, and
 * Hugeicons all share the grid), so glyphs from different suites morph into
 * each other.
 */
export const MorphIcon = forwardRef<MorphHandle, MorphIconProps>(
  function ThemedMorphIcon(
    { size = 24, color = colors.text.primary, strokeWidth = 2, ...rest },
    ref,
  ) {
    return (
      <BaseMorphIcon
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        {...rest}
      />
    );
  },
);
