import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from '../../components/common';
import { colors } from '../../theme';
import { styles } from './styles';

type LoginScreenProps = {
  /** Temporary hook into the rest of the app until real auth lands. */
  onContinue: () => void;
};

export function LoginScreen({ onContinue }: LoginScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24 }]}>
      <View
        style={[styles.topBody, { paddingBottom: Math.max(insets.bottom, 24) }]}
      >
        <Text variant="h1" color={colors.white}>
          Welcome to Roov
        </Text>
      </View>

      <View
        style={[
          styles.bottomBody,
          { paddingBottom: Math.max(insets.bottom, 24) },
        ]}
      >
        <Text variant="h1" color={colors.black}>
          Login
        </Text>

        <View style={styles.footer}>
          <Button title="Proceed" size="lg" fullWidth onPress={onContinue} />
          <Text variant="caption" align="center" style={styles.disclaimer}>
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </View>
    </View>
  );
}
