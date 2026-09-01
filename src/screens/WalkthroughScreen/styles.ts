import {StyleSheet} from 'react-native';
import {borderRadius, brand, colors, font} from '../../theme';

/** Shared between the title text and the clip that masks the animated word. */
export const TITLE_LINE_HEIGHT = 40;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brand.splashOverlay,
    paddingHorizontal: 24,
  },
  headerRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
  },
  headerLeft: {
    flexShrink: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  description: {
    marginTop: 10,
    fontFamily: font.regular,
    fontSize: 15,
    lineHeight: 21,
    color: 'rgba(241, 239, 232, 0.72)',
  },
  wordClip: {
    height: TITLE_LINE_HEIGHT,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: font.regular,
    fontSize: 34,
    lineHeight: TITLE_LINE_HEIGHT,
    textAlign: 'left',
    color: brand.splashText,
  },
  skip: {
    fontFamily: font.regular,
    fontSize: 14,
    letterSpacing: 1,
    color: colors.text.secondary,
  },
  body: {
    flex: 1,
  },
  footer: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(241, 239, 232, 0.26)',
  },
  dotActive: {
    width: 22,
    backgroundColor: colors.text.secondary,
  },
  nextButton: {
    width: 56,
    height: 56,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(241, 239, 232, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonPressed: {
    backgroundColor: 'rgba(241, 239, 232, 0.12)',
  },
  flipHorizontal: {
    transform: [{scaleX: -1}],
  },
  cta: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: 16,
  },
  ctaPressed: {
    backgroundColor: colors.primaryDark,
  },
  ctaText: {
    fontFamily: font.regular,
    fontSize: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
