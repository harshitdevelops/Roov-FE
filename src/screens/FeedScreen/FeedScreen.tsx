import { FlatList, View } from 'react-native';
import { Avatar, Card, ScreenShell, Text } from '../../components/common';
import { Keyline } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import { MOCK_FEED, type MockFeedPost } from '../../constants/mock';
import { styles } from './styles';

function FeedPostCard({ post }: { post: MockFeedPost }) {
  const { t } = useTranslation();

  return (
    <Card variant="elevated">
      <View style={styles.postHeader}>
        <Avatar
          name={post.riderName}
          backgroundColor={post.riderColor}
          size={40}
        />
        <View style={styles.postHeaderText}>
          <Text variant="body" weight="semiBold">
            {post.riderName}
          </Text>
          <Text variant="caption">{post.timeAgo}</Text>
        </View>
      </View>

      <Text variant="h5">{post.rideTitle}</Text>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text variant="label">{post.distanceKm} km</Text>
          <Text variant="caption">Distance</Text>
        </View>
        <View style={styles.stat}>
          <Text variant="label">{post.durationLabel}</Text>
          <Text variant="caption">Duration</Text>
        </View>
        <View style={styles.stat}>
          <Text variant="label">{post.riderCount}</Text>
          <Text variant="caption">Riders</Text>
        </View>
      </View>

      <View style={styles.footerRow}>
        <Keyline.HeartIcon size={18} color={colors.status.error} />
        <Text variant="bodySmall" color={colors.text.muted}>
          {post.kudos} {t('feed.kudos')}
        </Text>
      </View>
    </Card>
  );
}

export function FeedScreen() {
  const { t } = useTranslation();

  return (
    <ScreenShell title={t('feed.title')}>
      <FlatList
        data={MOCK_FEED}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FeedPostCard post={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text variant="body" align="center">
              {t('feed.empty')}
            </Text>
          </View>
        }
      />
    </ScreenShell>
  );
}
