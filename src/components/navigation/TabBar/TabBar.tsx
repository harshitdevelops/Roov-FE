import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Compass01Icon from '@hugeicons/core-free-icons/Compass01Icon';
import Home01Icon from '@hugeicons/core-free-icons/Home01Icon';
import UserCircleIcon from '@hugeicons/core-free-icons/UserCircleIcon';
import UserMultipleIcon from '@hugeicons/core-free-icons/UserMultipleIcon';
import { Text } from '../../common';
import { HugeIcon } from '../../icons';
import { useTranslation } from '../../../i18n';
import { colors } from '../../../theme';
import { styles } from './styles';

export type TabKey = 'home' | 'feed' | 'discover' | 'profile';

type TabBarProps = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

const TABS: ReadonlyArray<{
  key: TabKey;
  labelKey: 'tabs.home' | 'tabs.feed' | 'tabs.discover' | 'tabs.profile';
  icon: typeof Home01Icon;
}> = [
  { key: 'home', labelKey: 'tabs.home', icon: Home01Icon },
  { key: 'feed', labelKey: 'tabs.feed', icon: UserMultipleIcon },
  { key: 'discover', labelKey: 'tabs.discover', icon: Compass01Icon },
  { key: 'profile', labelKey: 'tabs.profile', icon: UserCircleIcon },
];

export function TabBar({ active, onChange }: TabBarProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}
    >
      {TABS.map(tab => {
        const isActive = tab.key === active;
        const tintColor = isActive ? colors.secondary : colors.text.muted;

        return (
          <Pressable
            key={tab.key}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
          >
            <HugeIcon
              icon={tab.icon}
              size={24}
              color={tintColor}
              strokeWidth={isActive ? 2 : 1.5}
            />
            <Text
              variant="caption"
              color={tintColor}
              weight={isActive ? 'semiBold' : 'regular'}
            >
              {t(tab.labelKey)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
