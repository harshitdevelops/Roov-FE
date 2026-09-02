import { StyleSheet, type ViewStyle } from 'react-native';
import {
  borderRadius,
  borderWidth,
  colors,
  shadows,
  spacing,
} from '../../../theme';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export const variantStyles: Record<CardVariant, ViewStyle> = {
  elevated: {
    backgroundColor: colors.surface,
    ...shadows.md,
  },
  outlined: {
    backgroundColor: colors.surface,
    borderWidth: borderWidth.thin,
    borderColor: colors.border.default,
  },
  filled: {
    backgroundColor: colors.surfaceMuted,
  },
};

export const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius['2xl'],
  },
  block: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
  },
  rowContent: {
    flex: 1,
    gap: spacing.xs,
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingBottom: spacing.md,
    marginBottom: spacing.md,
    borderBottomWidth: borderWidth.hairline,
    borderBottomColor: colors.border.default,
  },
  footer: {
    paddingTop: spacing.md,
    marginTop: spacing.md,
    borderTopWidth: borderWidth.hairline,
    borderTopColor: colors.border.default,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
});
