import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';
import {
  borderRadius,
  borderWidth,
  colors,
  spacing,
  typography,
} from '../../../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const sizeStyles: Record<
  ButtonSize,
  { container: ViewStyle; text: TextStyle; gap: number }
> = {
  sm: {
    container: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.base,
      borderRadius: borderRadius.md,
    },
    text: { fontSize: 13 },
    gap: spacing.xs,
  },
  md: {
    container: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: borderRadius.lg,
    },
    text: { fontSize: 15 },
    gap: spacing.sm,
  },
  lg: {
    container: {
      paddingVertical: spacing.base,
      paddingHorizontal: spacing.xl,
      borderRadius: borderRadius.lg,
    },
    text: { fontSize: 16 },
    gap: spacing.sm,
  },
};

export const variantStyles: Record<
  ButtonVariant,
  { container: ViewStyle; text: TextStyle; pressed: ViewStyle; spinner: string }
> = {
  primary: {
    container: { backgroundColor: colors.primary },
    text: { color: colors.text.onPrimary },
    pressed: { backgroundColor: colors.primaryDark },
    spinner: colors.text.onPrimary,
  },
  secondary: {
    container: {
      backgroundColor: colors.transparent,
      borderWidth: borderWidth.medium,
      borderColor: colors.primary,
    },
    text: { color: colors.primary },
    pressed: { backgroundColor: colors.blackAlpha[100] },
    spinner: colors.primary,
  },
  dark: {
    container: { backgroundColor: colors.secondary },
    text: { color: colors.text.onSecondary },
    pressed: { backgroundColor: colors.secondaryDark },
    spinner: colors.text.onSecondary,
  },
  ghost: {
    container: { backgroundColor: colors.transparent },
    text: { color: colors.primary },
    pressed: { backgroundColor: colors.blackAlpha[100] },
    spinner: colors.primary,
  },
};

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    ...typography.button,
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
