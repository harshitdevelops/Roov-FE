import { View } from 'react-native';
import { spacing } from '../../../theme';
import { styles } from './styles';

type SpacingKey = keyof typeof spacing;

export type SpacerProps = {
  /** Theme spacing key or a raw number. Defaults to `base`. */
  size?: SpacingKey | number;
  /** Space horizontally instead of vertically. */
  horizontal?: boolean;
  /** Expands to eat remaining space in a flex parent. */
  grow?: boolean;
};

export function Spacer({
  size = 'base',
  horizontal = false,
  grow = false,
}: SpacerProps) {
  if (grow) {
    return <View style={styles.grow} />;
  }

  const value = typeof size === 'number' ? size : spacing[size];
  return <View style={horizontal ? { width: value } : { height: value }} />;
}
