import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, font, typography} from '../theme';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceMuted,
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...typography.body,
    fontFamily: font.regular,
    fontSize: 13,
    color: colors.secondaryLight,
  },
  headerMeta: {
    ...typography.body,
    fontFamily: font.regular,
    fontSize: 12,
    color: colors.status.success,
  },
  mapCard: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 14,
    borderRadius: 16,
    backgroundColor: colors.status.success,
    overflow: 'hidden',
  },
  mapRing: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.text.secondary,
    opacity: 0.5,
    top: 40,
    left: -30,
  },
  mapMarker: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 999,
    backgroundColor: colors.status.warning,
    top: 130,
    left: 90,
  },
  footer: {
    paddingHorizontal: 18,
    paddingTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 999,
  },
});
