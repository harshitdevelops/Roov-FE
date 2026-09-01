import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';

type LoginScreenProps = {
  /** Temporary hook into the rest of the app until real auth lands. */
  onContinue: () => void;
};

/**
 * Placeholder — the real login screen is designed in a later pass. It exists so
 * the walkthrough's "Let's Ride" CTA has somewhere to land.
 */
export function LoginScreen({onContinue}: LoginScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 24,
          paddingBottom: Math.max(insets.bottom, 24),
        },
      ]}>
      <View style={styles.body}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Coming soon — this screen gets designed next.
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Continue"
        onPress={onContinue}
        style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}
