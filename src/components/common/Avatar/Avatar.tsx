import { type ReactNode, useState } from 'react';
import {
  Image,
  type ImageSourcePropType,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import { borderRadius, colors } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type AvatarProps = {
  source?: ImageSourcePropType;
  name?: string;
  fallback?: ReactNode;
  size?: number;
  square?: boolean;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
};

function initials(name?: string): string {
  if (!name) {
    return '';
  }
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map(p => p.charAt(0).toUpperCase()).join('');
}

export function Avatar({
  source,
  name,
  fallback,
  size = 40,
  square = false,
  backgroundColor = colors.primaryLight,
  style,
}: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const radius = square ? borderRadius.md : borderRadius.full;
  const showImage = source != null && !errored;

  return (
    <View
      style={[
        styles.base,
        { width: size, height: size, borderRadius: radius, backgroundColor },
        style,
      ]}
    >
      {showImage ? (
        <Image
          source={source}
          onError={() => setErrored(true)}
          style={{ width: size, height: size, borderRadius: radius }}
        />
      ) : (
        fallback ?? (
          <Text
            style={[
              styles.initials,
              { fontSize: size * 0.4, color: colors.text.onPrimary },
            ]}
          >
            {initials(name)}
          </Text>
        )
      )}
    </View>
  );
}
