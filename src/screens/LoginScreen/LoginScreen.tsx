import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Divider,
  IconButton,
  Text,
  TextInput,
} from '../../components/common';
import {
  ArrowRightIcon,
  GoogleGlyphIcon,
  MailIcon,
} from '../../components/icons';
import { colors, spacing } from '../../theme';
import { DEFAULT_COUNTRY, type Country } from '../../constants/countries';
import { CountryCodePicker } from './CountryCodePicker';
import { styles } from './styles';

type LoginScreenProps = {
  /** Temporary hook into the rest of the app until real auth lands. */
  onContinue: () => void;
  /** Opens the registration flow. No-op until that screen exists. */
  onRegister?: () => void;
};

export function LoginScreen({ onContinue, onRegister }: LoginScreenProps) {
  const insets = useSafeAreaInsets();
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [phone, setPhone] = useState('');

  const canProceed = phone.replace(/\D/g, '').length === country.nationalDigits;

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24 }]}>
      <View
        style={[styles.topBody, { paddingBottom: Math.max(insets.bottom, 24) }]}
      >
        <Text variant="h1" color={colors.white}>
          Welcome to Roov
        </Text>
        <Text variant="body" color={colors.accentLight} style={styles.bodyText}>
          Your People. Your Roads. Your Chaos.
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={insets.top + 24}
        style={[
          styles.bottomBody,
          { paddingBottom: Math.max(insets.bottom, 24) },
        ]}
      >
        <Text variant="h1" color={colors.black}>
          Login
        </Text>
        <Text variant="body" style={styles.subtitle}>
          Enter your mobile number and we’ll text you a one-time code.
        </Text>

        <View style={styles.form}>
          <TextInput
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoComplete="tel"
            placeholder="00000 00000"
            value={phone}
            onChangeText={setPhone}
            maxLength={country.nationalDigits + 4}
            leftIcon={
              <CountryCodePicker value={country} onSelect={setCountry} />
            }
            fieldStyle={styles.phoneField}
          />

          <Divider
            label="Or Use:"
            spacing={spacing.lg}
            color={colors.grey[400]}
          />

          <View style={styles.socialRow}>
            <IconButton
              round
              variant="outline"
              size={48}
              accessibilityLabel="Continue with email"
              icon={
                <MailIcon width={20} height={20} color={colors.text.primary} />
              }
            />
            <IconButton
              round
              variant="outline"
              size={48}
              accessibilityLabel="Continue with Google"
              icon={
                <GoogleGlyphIcon
                  width={20}
                  height={20}
                  color={colors.text.primary}
                />
              }
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Pressable
            accessibilityRole="button"
            hitSlop={8}
            onPress={onRegister}
            style={styles.registerRow}
          >
            <Text variant="body" color={colors.text.primary}>
              New to Roov?{' '}
            </Text>
            <Text variant="body" weight="semiBold" color={colors.text.primary}>
              Register
            </Text>
            <ArrowRightIcon
              width={18}
              height={18}
              color={colors.text.primary}
            />
          </Pressable>

          <Button
            title="Proceed"
            size="lg"
            fullWidth
            disabled={!canProceed}
            onPress={onContinue}
          />
          <Text variant="caption" align="center" style={styles.disclaimer}>
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
