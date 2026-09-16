import { type ComponentType } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CompassIcon from '@hugeicons/core-free-icons/CompassIcon';
import Home01Icon from '@hugeicons/core-free-icons/Home01Icon';
import Search01Icon from '@hugeicons/core-free-icons/Search01Icon';
import UserCircleIcon from '@hugeicons/core-free-icons/UserCircleIcon';
import UserMultipleIcon from '@hugeicons/core-free-icons/UserMultipleIcon';
import { Text } from '../../common';
import {
  CompassSolidIcon,
  HomeSolidIcon,
  HugeIcon,
  SearchSolidIcon,
  UserCircleSolidIcon,
  UsersSolidIcon,
} from '../../icons';
import { useTranslation } from '../../../i18n';
import { colors } from '../../../theme';
import { styles } from './styles';

export type TabKey = 'home' | 'myRides' | 'feed' | 'discover' | 'profile';

type TabBarProps = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

type SolidIconProps = { size?: number; color?: string };

const TABS: ReadonlyArray<{
  key: TabKey;
  labelKey:
    | 'tabs.home'
    | 'tabs.myRides'
    | 'tabs.feed'
    | 'tabs.discover'
    | 'tabs.profile';
  outlineIcon: typeof CompassIcon;
  SolidIcon: ComponentType<SolidIconProps>;
}> = [
  {
    key: 'home',
    labelKey: 'tabs.home',
    outlineIcon: Home01Icon,
    SolidIcon: HomeSolidIcon,
  },
  {
    key: 'myRides',
    labelKey: 'tabs.myRides',
    outlineIcon: CompassIcon,
    SolidIcon: CompassSolidIcon,
  },
  {
    key: 'feed',
    labelKey: 'tabs.feed',
    outlineIcon: UserMultipleIcon,
    SolidIcon: UsersSolidIcon,
  },
  {
    key: 'discover',
    labelKey: 'tabs.discover',
    outlineIcon: Search01Icon,
    SolidIcon: SearchSolidIcon,
  },
  {
    key: 'profile',
    labelKey: 'tabs.profile',
    outlineIcon: UserCircleIcon,
    SolidIcon: UserCircleSolidIcon,
  },
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
            {isActive ? (
              <tab.SolidIcon size={24} color={tintColor} />
            ) : (
              <HugeIcon
                icon={tab.outlineIcon}
                size={24}
                color={tintColor}
                strokeWidth={1.5}
              />
            )}
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
