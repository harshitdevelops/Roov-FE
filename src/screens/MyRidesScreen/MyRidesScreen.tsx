import { FlatList, View } from 'react-native';
import Calendar01Icon from '@hugeicons/core-free-icons/Calendar01Icon';
import Route01Icon from '@hugeicons/core-free-icons/Route01Icon';
import UserGroupIcon from '@hugeicons/core-free-icons/UserGroupIcon';
import {
  Badge,
  type BadgeVariant,
  Card,
  ScreenShell,
  Text,
} from '../../components/common';
import { HugeIcon } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import { MOCK_MY_RIDES, type MockRide } from '../../constants/mock';
import { styles } from './styles';

const STATUS_VARIANT: Record<MockRide['status'], BadgeVariant> = {
  live: 'success',
  upcoming: 'highlight',
  completed: 'neutral',
};

function RideCard({ ride }: { ride: MockRide }) {
  const { t } = useTranslation();

  return (
    <Card variant="elevated">
      <View style={styles.cardHeader}>
        <Badge
          label={t(`myRides.status.${ride.status}`)}
          variant={STATUS_VARIANT[ride.status]}
        />
        <Text variant="caption" color={colors.text.muted}>
          {t(ride.role === 'hosted' ? 'myRides.hosted' : 'myRides.joined')}
        </Text>
      </View>

      <Text variant="h5">{ride.title}</Text>

      <View style={styles.detailRow}>
        <HugeIcon icon={Calendar01Icon} size={16} color={colors.text.muted} />
        <Text variant="bodySmall" color={colors.text.muted}>
          {ride.dateLabel}
        </Text>
      </View>
      <View style={styles.detailRow}>
        <HugeIcon icon={Route01Icon} size={16} color={colors.text.muted} />
        <Text variant="bodySmall" color={colors.text.muted}>
          {ride.meetingPoint}
        </Text>
      </View>
      <View style={styles.detailRow}>
        <HugeIcon icon={UserGroupIcon} size={16} color={colors.text.muted} />
        <Text variant="bodySmall" color={colors.text.muted}>
          {t('home.riding', { count: ride.riderCount })}
        </Text>
      </View>
    </Card>
  );
}

export function MyRidesScreen() {
  const { t } = useTranslation();

  return (
    <ScreenShell title={t('myRides.title')}>
      <FlatList
        data={MOCK_MY_RIDES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RideCard ride={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text variant="body" align="center">
              {t('myRides.empty')}
            </Text>
          </View>
        }
      />
    </ScreenShell>
  );
}
