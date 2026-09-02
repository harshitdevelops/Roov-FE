import { type ComponentRef } from 'react';
import {
  Text as RNText,
  type StyleProp,
  type TextProps as RNTextProps,
  type TextStyle,
} from 'react-native';
import { fontWeights, getFontStyle, typography } from '../../../theme';

export type TextVariant = keyof typeof typography;
export type TextWeight = keyof typeof fontWeights;

export type TextProps = RNTextProps & {
  /** Typography preset pulled from the theme. Defaults to `body`. */
  variant?: TextVariant;
  /** Shorthand for `style={{color}}`. */
  color?: string;
  /** Shorthand for `style={{textAlign}}`. */
  align?: TextStyle['textAlign'];
  /** Overrides the preset font weight. */
  weight?: TextWeight;
  style?: StyleProp<TextStyle>;
  ref?: React.Ref<ComponentRef<typeof RNText>>;
};

/**
 * Theme-aware replacement for `react-native`'s `Text`. Every text node in the
 * app should go through here so typography stays consistent.
 */
export function Text({
  variant = 'body',
  color,
  align,
  weight,
  style,
  children,
  ...rest
}: TextProps) {
  return (
    <RNText
      style={[
        typography[variant],
        weight != null && getFontStyle(fontWeights[weight]),
        color != null && { color },
        align != null && { textAlign: align },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}
