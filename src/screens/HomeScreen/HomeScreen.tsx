import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../theme';
import {styles} from './styles';

const AVATAR_COLORS = [
  colors.text.secondary,
  colors.status.warning,
  colors.secondaryLight,
] as const;

export function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Live ride</Text>
        <Text style={styles.headerMeta}>4 riding</Text>
      </View>

      <View style={styles.mapCard}>
        <View style={styles.mapRing} />
        <View style={styles.mapMarker} />
      </View>

      <View style={[styles.footer, {paddingBottom: Math.max(insets.bottom, 22)}]}>
        {AVATAR_COLORS.map(color => (
          <View key={color} style={[styles.avatar, {backgroundColor: color}]} />
        ))}
      </View>
    </View>
  );
}
