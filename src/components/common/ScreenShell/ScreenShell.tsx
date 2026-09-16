import { type ReactNode } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type ScreenShellProps = {
  /** Page title rendered on the gradient header. Ignored if `headerContent` is set. */
  title?: string;
  /** Replaces the default title text for a custom header (e.g. HomeScreen's greeting row). */
  headerContent?: ReactNode;
  /** Content of the rounded sheet — a ScrollView, FlatList, etc. */
  children: ReactNode;
};

/**
 * Shared shell: a dark gradient header over a rounded, scrollable "sheet".
 * Every screen except Profile uses this so the app reads as one system.
 */
export function ScreenShell({
  title,
  headerContent,
  children,
}: ScreenShellProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <LinearGradient
        style={styles.backgroundContainer}
        colors={[colors.secondary, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <View style={styles.header}>
        {headerContent ?? (
          <Text variant="h3" color={colors.white}>
            {title}
          </Text>
        )}
      </View>

      <View style={styles.sheet}>
        <View style={styles.sheetBody}>{children}</View>
      </View>
    </View>
  );
}
