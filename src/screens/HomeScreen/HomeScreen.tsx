import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Calendar01Icon from '@hugeicons/core-free-icons/Calendar01Icon';
import Car01Icon from '@hugeicons/core-free-icons/Car01Icon';
import Route01Icon from '@hugeicons/core-free-icons/Route01Icon';
import UserAdd01Icon from '@hugeicons/core-free-icons/UserAdd01Icon';
import UserGroupIcon from '@hugeicons/core-free-icons/UserGroupIcon';
import { Avatar, Badge, Card, Text } from '../../components/common';
import { HugeIcon, RoovCoinIcon } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import {
  MOCK_ROOVMATES,
  MOCK_UPCOMING_RIDE,
  MOCK_USER,
} from '../../constants/mock';
import { styles } from './styles';

type HomeScreenProps = {
  onHostRide: () => void;
  onJoinRide: () => void;
};

export function HomeScreen({ onHostRide, onJoinRide }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const isLive = false;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text variant="h3">
            {t('home.greeting', { name: MOCK_USER.name })}
          </Text>
          <View style={styles.pointsPill}>
            <RoovCoinIcon size={18} />
            <Text variant="label" color={colors.text.primary}>
              {MOCK_USER.roovPoints}
            </Text>
          </View>
        </View>

        <View style={styles.ctaRow}>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.ctaCard,
              styles.ctaCardPrimary,
              pressed && styles.ctaCardPressed,
            ]}
            onPress={onHostRide}
          >
            <View style={[styles.ctaIconBadge, styles.ctaIconBadgePrimary]}>
              <HugeIcon
                icon={Car01Icon}
                size={26}
                color={colors.text.onPrimary}
                strokeWidth={1.8}
              />
            </View>
            <Text variant="label" color={colors.text.onPrimary}>
              {t('home.hostRide')}
            </Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.ctaCard,
              styles.ctaCardSecondary,
              pressed && styles.ctaCardPressed,
            ]}
            onPress={onJoinRide}
          >
            <View style={[styles.ctaIconBadge, styles.ctaIconBadgeSecondary]}>
              <HugeIcon
                icon={UserAdd01Icon}
                size={26}
                color={colors.secondary}
                strokeWidth={1.8}
              />
            </View>
            <Text variant="label" color={colors.secondary}>
              {t('home.joinRide')}
            </Text>
          </Pressable>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text variant="h5">{t('home.liveRide')}</Text>
            {isLive && (
              <Badge label={t('home.riding', { count: 4 })} variant="success" />
            )}
          </View>
          <Card variant="elevated" style={styles.liveRideCard}>
            {isLive ? (
              <View style={styles.mapCard}>
                <View style={styles.mapRing} />
                <View style={styles.mapMarker} />
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Text variant="body" weight="medium">
                  {t('home.noLiveRide')}
                </Text>
                <Text variant="caption">{t('home.noLiveRideHint')}</Text>
              </View>
            )}
          </Card>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text variant="h5">{t('home.upcoming')}</Text>
          </View>
          <Card variant="outlined">
            <Text variant="h5">{MOCK_UPCOMING_RIDE.title}</Text>
            <View style={styles.rideDetailRow}>
              <HugeIcon
                icon={Calendar01Icon}
                size={16}
                color={colors.text.muted}
              />
              <Text variant="bodySmall" color={colors.text.muted}>
                {MOCK_UPCOMING_RIDE.dateLabel}
              </Text>
            </View>
            <View style={styles.rideDetailRow}>
              <HugeIcon
                icon={Route01Icon}
                size={16}
                color={colors.text.muted}
              />
              <Text variant="bodySmall" color={colors.text.muted}>
                {MOCK_UPCOMING_RIDE.meetingPoint}
              </Text>
            </View>
            <View style={styles.rideDetailRow}>
              <HugeIcon
                icon={UserGroupIcon}
                size={16}
                color={colors.text.muted}
              />
              <Text variant="bodySmall" color={colors.text.muted}>
                {t('home.riding', { count: MOCK_UPCOMING_RIDE.riderCount })}
              </Text>
            </View>
          </Card>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text variant="h5">{t('home.roovMates')}</Text>
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
      </ScrollView>
    </View>
  );
}
