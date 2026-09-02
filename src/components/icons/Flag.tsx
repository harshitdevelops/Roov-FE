import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import AE from 'country-flag-icons/string/3x2/AE';
import AU from 'country-flag-icons/string/3x2/AU';
import CA from 'country-flag-icons/string/3x2/CA';
import GB from 'country-flag-icons/string/3x2/GB';
import IN from 'country-flag-icons/string/3x2/IN';
import SG from 'country-flag-icons/string/3x2/SG';
import US from 'country-flag-icons/string/3x2/US';
import { borderRadius, borderWidth, colors } from '../../theme';

/** Straight-edged rectangular flags (3:2), keyed by ISO 3166-1 alpha-2. */
const FLAGS: Record<string, string> = { AE, AU, CA, GB, IN, SG, US };

type FlagProps = {
  iso2: string;
  /** Flag width in px. Height is derived from the 3:2 ratio. */
  width?: number;
  style?: StyleProp<ViewStyle>;
};

export function Flag({ iso2, width = 24, style }: FlagProps) {
  const xml = FLAGS[iso2.toUpperCase()];
  const height = Math.round((width / 3) * 2);

  return (
    <View style={[styles.frame, { width, height }, style]}>
      {xml != null && (
        <SvgXml
          xml={xml}
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid slice"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: borderRadius.sm / 2,
    borderWidth: borderWidth.hairline,
    borderColor: colors.border.default,
    overflow: 'hidden',
    backgroundColor: colors.surfaceMuted,
  },
});
