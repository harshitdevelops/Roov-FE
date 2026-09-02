import { StyleSheet } from 'react-native';
import { borderRadius, borderWidth, colors, spacing } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryDark,
  },
  topBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.secondaryDark,
  },
  bottomBody: {
    flex: 6,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.beige,
    zIndex: 2,
    borderRadius: 40,
    paddingVertical: 24,
    paddingHorizontal: 24,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  subtitle: {
    marginTop: spacing.sm,
    color: colors.grey[600],
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  phoneField: {
    minHeight: 52,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.base,
    marginTop: spacing.xs,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
    gap: spacing.sm,
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
    paddingVertical: spacing.xs,
  },
  disclaimer: {
    color: colors.black,
  },
  bodyText: {
    marginTop: spacing.md,
    textAlign: 'center',
  },
});

export const pickerStyles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingRight: spacing.sm,
    marginRight: spacing.xs,
    borderRightWidth: borderWidth.thin,
    borderRightColor: colors.border.default,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
  },
  sheet: {
    marginTop: 'auto',
    maxHeight: '70%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: borderRadius['2xl'],
    borderTopRightRadius: borderRadius['2xl'],
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  rowDivider: {
    height: borderWidth.hairline,
    backgroundColor: colors.border.default,
  },
  rowName: {
    flex: 1,
  },
});
