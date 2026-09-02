import { StyleSheet, type ViewStyle } from 'react-native';
import { borderWidth, colors } from '../../../theme';

export type IconButtonVariant = 'solid' | 'outline' | 'ghost';

export const variantStyles: Record<
  IconButtonVariant,
  { container: ViewStyle; pressed: ViewStyle }
> = {
  solid: {
    container: { backgroundColor: colors.primary },
    pressed: { backgroundColor: colors.primaryDark },
  },
  outline: {
    container: {
      backgroundColor: colors.transparent,
      borderWidth: borderWidth.thin,
      borderColor: colors.border.default,
    },
    pressed: { backgroundColor: colors.blackAlpha[100] },
  },
  ghost: {
    container: { backgroundColor: colors.transparent },
    pressed: { backgroundColor: colors.blackAlpha[100] },
  },
};

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
