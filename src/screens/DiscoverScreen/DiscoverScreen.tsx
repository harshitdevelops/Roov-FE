import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Compass01Icon from '@hugeicons/core-free-icons/Compass01Icon';
import { Text } from '../../components/common';
import { HugeIcon } from '../../components/icons';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import { styles } from './styles';

export function DiscoverScreen() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text variant="h3">{t('discover.title')}</Text>
      </View>

      <View style={styles.emptyState}>
        <View style={styles.emptyIconBadge}>
          <HugeIcon
            icon={Compass01Icon}
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
    </View>
  );
}
