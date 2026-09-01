import {StyleSheet} from 'react-native';
import {brand, colors, font} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brand.splashOverlay,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  letter: {
    fontFamily: font.regular,
    fontSize: 26,
    lineHeight: 32,
    color: brand.splashText,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 32,
    minHeight: 12,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
  },
  tagline: {
    position: 'absolute',
    left: 24,
    right: 24,
    fontFamily: font.regular,
    fontSize: 11,
    letterSpacing: 2,
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
