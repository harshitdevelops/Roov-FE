import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

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
    justifyContent: 'flex-end',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: spacing.xl,
  },
  bodyText: {
    marginTop: spacing.md,
    marginBottom: spacing['2xl'],
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
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
  form: {
    width: '100%',
    marginTop: spacing.xl,
  },
  codeField: {
    minHeight: 56,
  },
  codeInput: {
    letterSpacing: 8,
    fontSize: 20,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
    gap: spacing.base,
  },
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
