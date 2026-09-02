import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryDark,
  },
  topBody: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.secondaryDark,
  },
  bottomBody: {
    flex: 4,
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
  footer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
    gap: spacing.sm,
  },
  disclaimer: {
    color: colors.black,
  },
});
