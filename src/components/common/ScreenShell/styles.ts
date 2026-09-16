import { StyleSheet } from 'react-native';
import { borderRadius, colors, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.secondary,
  },
  header: {
    paddingTop: spacing.base,
    paddingHorizontal: spacing.base,
    paddingBottom: 24,
    zIndex: 2,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  sheet: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius['2xl'],
    borderTopRightRadius: borderRadius['2xl'],
    overflow: 'hidden',
    zIndex: 2,
  },
  sheetBody: {
    flex: 1,
    paddingTop: spacing.xl,
  },
});
