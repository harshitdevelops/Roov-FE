import { StyleSheet } from 'react-native';
import {
  borderRadius,
  borderWidth,
  colors,
  getFontStyle,
  fontSize,
  fontWeights,
  spacing,
  typography,
} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
    alignSelf: 'stretch',
  },
  label: {
    ...typography.label,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: borderWidth.thin,
    borderColor: colors.border.default,
    paddingHorizontal: spacing.base,
    minHeight: 48,
  },
  fieldFocused: {
    borderColor: colors.border.focus,
  },
  fieldError: {
    borderColor: colors.status.error,
  },
  fieldDisabled: {
    backgroundColor: colors.surfaceMuted,
    opacity: 0.7,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.md,
    ...getFontStyle(fontWeights.regular),
    fontSize: fontSize.base,
    color: colors.text.primary,
  },
  multiline: {
    minHeight: 96,
    textAlignVertical: 'top',
    paddingTop: spacing.md,
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  helper: {
    ...typography.caption,
  },
  helperError: {
    color: colors.status.error,
  },
});
