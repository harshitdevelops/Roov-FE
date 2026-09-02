import {StyleSheet} from 'react-native';
import {colors, font, typography} from '../../theme';

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
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  title: {
    ...typography.h1,
    fontFamily: font.regular,
    color: colors.black,
  },
  title1: {
    ...typography.h1,
    fontFamily: font.regular,
    color: colors.white,
  },
  buttonTitle: {
    ...typography.h2,
    fontFamily: font.regular,
    color: colors.white,
    fontSize: 18,
  },
  button: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  disclaimer: {
    fontSize: 10,
    fontFamily: font.regular,
    color: colors.black,
    marginTop: 8,
    textAlign: 'center',
  },
});
