import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';

type LoginScreenProps = {
  /** Temporary hook into the rest of the app until real auth lands. */
  onContinue: () => void;
};

export function LoginScreen({onContinue}: LoginScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 24,
        },
      ]}>
        <View
          style={[
            styles.topBody,
            {paddingBottom: Math.max(insets.bottom, 24)},
          ]}>
          <Text style={styles.title1}>Welcome to Roov</Text>
        </View>
        <View
          style={[
            styles.bottomBody,
            {paddingBottom: Math.max(insets.bottom, 24)},
          ]}>
          <Text style={styles.title}>Login</Text>
          <Pressable style={styles.button} onPress={onContinue}>
            <Text style={styles.buttonTitle}>Proceed</Text>
          </Pressable>
          <Text style={styles.disclaimer}>
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
    </View>
  );
}
