import { StyleSheet } from 'react-native';
import { borderWidth, colors, fontWeights, getFontStyle } from '../../../theme';

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: borderWidth.hairline,
    borderColor: colors.blackAlpha[200],
  },
  initials: {
    ...getFontStyle(fontWeights.semiBold),
  },
});
