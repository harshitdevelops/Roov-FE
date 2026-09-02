import { type ComponentRef, type ReactNode, useState } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
  type StyleProp,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import { colors } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type TextInputProps = Omit<RNTextInputProps, 'style'> & {
  label?: string;
  /** Error message. Also switches the field to its error styling. */
  error?: string;
  /** Hint shown below the field when there is no error. */
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Makes the right icon tappable (e.g. a clear or reveal-password button). */
  onRightIconPress?: () => void;
  disabled?: boolean;
  /** Wrapper around label + field + helper. */
  containerStyle?: StyleProp<ViewStyle>;
  /** The bordered row that holds the icons and input. */
  fieldStyle?: StyleProp<ViewStyle>;
  /** The native text input itself. */
  inputStyle?: StyleProp<TextStyle>;
  ref?: React.Ref<ComponentRef<typeof RNTextInput>>;
};

export function TextInput({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  disabled = false,
  containerStyle,
  fieldStyle,
  inputStyle,
  multiline,
  onFocus,
  onBlur,
  ref,
  ...rest
}: TextInputProps) {
  const [focused, setFocused] = useState(false);
  const hasError = error != null && error !== '';
  const helper = hasError ? error : helperText;

  return (
    <View style={[styles.container, containerStyle]}>
      {label != null && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.field,
          focused && styles.fieldFocused,
          hasError && styles.fieldError,
          disabled && styles.fieldDisabled,
          fieldStyle,
        ]}
      >
        {leftIcon != null && <View style={styles.iconSlot}>{leftIcon}</View>}

        <RNTextInput
          ref={ref}
          editable={!disabled}
          multiline={multiline}
          placeholderTextColor={colors.text.muted}
          style={[styles.input, multiline && styles.multiline, inputStyle]}
          onFocus={e => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={e => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />

        {rightIcon != null &&
          (onRightIconPress != null ? (
            <Pressable
              accessibilityRole="button"
              hitSlop={8}
              onPress={onRightIconPress}
              style={styles.iconSlot}
            >
              {rightIcon}
            </Pressable>
          ) : (
            <View style={styles.iconSlot}>{rightIcon}</View>
          ))}
      </View>

      {helper != null && helper !== '' && (
        <Text style={[styles.helper, hasError && styles.helperError]}>
          {helper}
        </Text>
      )}
    </View>
  );
}
