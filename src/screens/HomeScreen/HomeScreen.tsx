import { Pressable, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Calendar01Icon from '@hugeicons/core-free-icons/Calendar01Icon';
import Car01Icon from '@hugeicons/core-free-icons/Car01Icon';
import Route01Icon from '@hugeicons/core-free-icons/Route01Icon';
import UserAdd01Icon from '@hugeicons/core-free-icons/UserAdd01Icon';
import UserGroupIcon from '@hugeicons/core-free-icons/UserGroupIcon';
import {
  AnimatedCounter,
  AvatarProgressRing,
  Badge,
  Card,
  NotificationBell,
  Text,
} from '../../components/common';
import { HugeIcon, RoovCoinIcon } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import {
  MOCK_UNREAD_NOTIFICATIONS,
  MOCK_UPCOMING_RIDE,
  MOCK_USER,
} from '../../constants/mock';
import { styles } from './styles';

type HomeScreenProps = {
  onHostRide: () => void;
  onJoinRide: () => void;
  onOpenProfile: () => void;
};

export function HomeScreen({
  onHostRide,
  onJoinRide,
  onOpenProfile,
}: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const isLive = false;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <LinearGradient
        style={styles.backgroundContainer}
        colors={[colors.secondary, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.headerIdentity}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Open profile"
              onPress={onOpenProfile}
            >
              <AvatarProgressRing
                source={
                  MOCK_USER.avatarUri != null
                    ? { uri: MOCK_USER.avatarUri }
                    : undefined
                }
                name={MOCK_USER.name}
                progress={MOCK_USER.profileCompletion}
                size={30}
              />
            </Pressable>
            <View>
              <Text variant="h3" color={colors.white}>
                {t('home.greeting', { name: MOCK_USER.name })}
              </Text>
              <View style={styles.pointsPill}>
                <RoovCoinIcon size={18} />
                <AnimatedCounter
                  variant="label"
                  color={colors.text.primary}
                  value={MOCK_USER.roovPoints}
                />
              </View>
            </View>
          </View>
          <NotificationBell count={MOCK_UNREAD_NOTIFICATIONS} />
        </View>
      </View>

      <View style={styles.sheet}>
        <ScrollView
          style={styles.sheetScroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
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

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text variant="h5">{t('home.liveRide')}</Text>
              {isLive && (
                <Badge
                  label={t('home.riding', { count: 4 })}
                  variant="success"
                />
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

          <View style={styles.section}>
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
        </ScrollView>
      </View>
    </View>
  );
}
