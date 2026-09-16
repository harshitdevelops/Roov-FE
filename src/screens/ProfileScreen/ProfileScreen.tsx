import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Copy01Icon from '@hugeicons/core-free-icons/Copy01Icon';
import Logout03Icon from '@hugeicons/core-free-icons/Logout03Icon';
import Medal01Icon from '@hugeicons/core-free-icons/Medal01Icon';
import Settings02Icon from '@hugeicons/core-free-icons/Settings02Icon';
import Share08Icon from '@hugeicons/core-free-icons/Share08Icon';
import { Avatar, Button, Card, Divider, Text } from '../../components/common';
import { HugeIcon, RoovCoinIcon } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import { MOCK_MEDALS, MOCK_ROOVMATES, MOCK_USER } from '../../constants/mock';
import { styles } from './styles';

type ProfileScreenProps = {
  onLogout: () => void;
};

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Avatar name={MOCK_USER.name} size={64} />
          <Text variant="h4">{MOCK_USER.name}</Text>
        </View>

        <Card variant="elevated" style={styles.pointsCard}>
          <View style={styles.pointsRow}>
            <View style={styles.pointsIconBadge}>
              <RoovCoinIcon size={26} />
            </View>
            <View style={styles.pointsText}>
              <Text variant="h3">{MOCK_USER.roovPoints}</Text>
              <Text variant="label">{t('profile.pointsLabel')}</Text>
            </View>
          </View>
          <Text variant="caption" style={styles.pointsNote}>
            {t('profile.pointsNote')}
          </Text>
        </Card>

        <Card variant="outlined">
          <Text variant="label">{t('profile.referralLabel')}</Text>
          <View style={styles.referralRow}>
            <View style={styles.referralCodeChip}>
              <Text variant="h5">{MOCK_USER.referralCode}</Text>
              <HugeIcon
                icon={Copy01Icon}
                size={16}
                color={colors.text.muted}
                strokeWidth={1.8}
              />
            </View>
            <Button
              title={t('profile.share')}
              variant="secondary"
              size="sm"
              leftIcon={
                <HugeIcon
                  icon={Share08Icon}
                  size={16}
                  color={colors.secondary}
                  strokeWidth={1.8}
                />
              }
            />
          </View>
        </Card>

        <View>
          <View style={styles.sectionHeader}>
            <Text variant="h5">{t('profile.medals')}</Text>
          </View>
          <View style={styles.medalsGrid}>
            {MOCK_MEDALS.map(medal => (
              <View key={medal.id} style={styles.medalItem}>
                <View
                  style={[
                    styles.medalIconBadge,
                    !medal.earned && styles.medalIconBadgeMuted,
                  ]}
                >
                  <HugeIcon
                    icon={Medal01Icon}
                    size={22}
                    color={medal.earned ? colors.accent : colors.text.muted}
                    strokeWidth={1.8}
                  />
                </View>
                <Text
                  variant="caption"
                  align="center"
                  color={medal.earned ? colors.text.primary : colors.text.muted}
                >
                  {medal.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text variant="h5">{t('profile.roovMates')}</Text>
            <Text variant="link">{t('home.viewAll')}</Text>
          </View>
          <View style={styles.roovMatesRow}>
            {MOCK_ROOVMATES.map((mate, index) => (
              <Avatar
                key={mate.id}
                name={mate.name}
                backgroundColor={mate.color}
                size={44}
                style={index === 0 ? undefined : styles.roovMateAvatar}
              />
            ))}
          </View>
        </View>

        <Divider />

        <Pressable style={styles.actionRow} accessibilityRole="button">
          <HugeIcon
            icon={Settings02Icon}
            size={20}
            color={colors.text.primary}
            strokeWidth={1.8}
          />
          <Text variant="body">{t('profile.settings')}</Text>
        </Pressable>

        <Pressable
          style={styles.actionRow}
          accessibilityRole="button"
          onPress={onLogout}
        >
          <HugeIcon
            icon={Logout03Icon}
            size={20}
            color={colors.status.error}
            strokeWidth={1.8}
          />
          <Text variant="body" color={colors.status.error}>
            {t('profile.logout')}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
