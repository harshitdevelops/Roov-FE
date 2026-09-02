import { StyleSheet } from 'react-native';
import { colors, fontWeights, getFontStyle, spacing } from '../../../theme';

export type BadgeVariant =
  | 'neutral'
  | 'primary'
  | 'highlight'
  | 'success'
  | 'warning'
  | 'error';

export const variantStyles: Record<BadgeVariant, { bg: string; fg: string }> = {
  neutral: { bg: colors.surfaceMuted, fg: colors.text.primary },
  primary: { bg: colors.primary, fg: colors.text.onPrimary },
  highlight: { bg: colors.highlight, fg: colors.text.onHighlight },
  success: { bg: colors.status.success, fg: colors.white },
  warning: { bg: colors.status.warning, fg: colors.text.onHighlight },
  error: { bg: colors.status.error, fg: colors.white },
};

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
  },
  text: {
    ...getFontStyle(fontWeights.semiBold),
    fontSize: 11,
    letterSpacing: 0.5,
  },
});
