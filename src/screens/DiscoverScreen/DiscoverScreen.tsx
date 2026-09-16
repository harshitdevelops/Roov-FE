import { View } from 'react-native';
import CompassIcon from '@hugeicons/core-free-icons/CompassIcon';
import { ScreenShell, Text } from '../../components/common';
import { HugeIcon } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import { styles } from './styles';

export function DiscoverScreen() {
  const { t } = useTranslation();

  return (
    <ScreenShell title={t('discover.title')}>
      <View style={styles.emptyState}>
        <View style={styles.emptyIconBadge}>
          <HugeIcon
            icon={CompassIcon}
            size={28}
            color={colors.text.muted}
            strokeWidth={1.5}
          />
        </View>
        <Text variant="body" weight="medium" align="center">
          {t('discover.emptyTitle')}
        </Text>
        <Text variant="caption" align="center">
          {t('discover.emptyHint')}
        </Text>
      </View>
    </ScreenShell>
  );
}
