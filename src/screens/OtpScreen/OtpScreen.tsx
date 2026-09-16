import { useCallback, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, IconButton, Text, TextInput } from '../../components/common';
import { ArrowLeftIcon } from '../../components/icons';
import { colors } from '../../theme';
import { useTranslation } from '../../i18n';
import { styles } from './styles';

const CODE_LENGTH = 6;
const RESEND_SECONDS = 30;

type OtpScreenProps = {
  /** Full phone number (with country dial code) the code was sent to. */
  phone: string;
  onVerified: () => void;
  onBack: () => void;
};

export function OtpScreen({ phone, onVerified, onBack }: OtpScreenProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const timer = setTimeout(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const handleResend = useCallback(() => {
    setSecondsLeft(RESEND_SECONDS);
  }, []);

  const canVerify = code.length === CODE_LENGTH;

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24 }]}>
      <View style={styles.topBody}>
        <IconButton
          variant="ghost"
          style={[styles.backButton, { top: insets.top + 24 }]}
          accessibilityLabel={t('common.back')}
          onPress={onBack}
          icon={<ArrowLeftIcon width={22} height={22} color={colors.white} />}
        />
        <Text variant="h1" color={colors.white} align="center">
          {t('otp.title')}
        </Text>
        <Text variant="body" color={colors.accentLight} style={styles.bodyText}>
          {t('otp.subtitle', { phone })}
        </Text>
      </View>

      <View
        style={[
          styles.bottomBody,
          { paddingBottom: Math.max(insets.bottom, 24) },
        ]}
      >
        <View style={styles.form}>
          <TextInput
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete="sms-otp"
            placeholder={t('otp.codePlaceholder')}
            value={code}
            onChangeText={text =>
              setCode(text.replace(/\D/g, '').slice(0, CODE_LENGTH))
            }
            maxLength={CODE_LENGTH}
            fieldStyle={styles.codeField}
            inputStyle={styles.codeInput}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.resendRow}>
            <Text variant="body" color={colors.text.primary}>
              {t('otp.resendPrompt')}
            </Text>
            {secondsLeft > 0 ? (
              <Text variant="body" color={colors.text.muted}>
                {t('otp.resendIn', { seconds: secondsLeft })}
              </Text>
            ) : (
              <Pressable
                accessibilityRole="button"
                hitSlop={8}
                onPress={handleResend}
              >
                <Text variant="body" weight="semiBold" color={colors.primary}>
                  {t('otp.resend')}
                </Text>
              </Pressable>
            )}
          </View>

          <Button
            title={t('otp.verify')}
            size="lg"
            fullWidth
            disabled={!canVerify}
            onPress={onVerified}
          />
        </View>
      </View>
    </View>
  );
}
