import {StyleSheet} from 'react-native';
import {borderRadius, colors, font, typography} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    ...typography.h1,
    fontFamily: font.regular,
  },
  subtitle: {
    ...typography.bodySmall,
    fontFamily: font.regular,
    textAlign: 'center',
    color: colors.text.muted,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: font.regular,
    fontSize: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
