import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  type LayoutChangeEvent,
  Modal,
  Pressable,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
// Import icons one-per-subpath, never from the '@hugeicons/core-free-icons'
// barrel — the barrel pulls all ~6k icon modules into the Metro graph (no
// tree-shaking), which hangs the bundler at 99%.
import LanguageSquareIcon from '@hugeicons/core-free-icons/LanguageSquareIcon';
import { Text } from '../components/common';
import { CheckIcon, CloseIcon } from '../components/icons';
import { HugeIcon } from '../components/icons/hugeicons';
import { borderRadius, borderWidth, colors, spacing } from '../theme';
import { useTranslation } from './I18nProvider';
import { LANGUAGES, type Language } from './languages';

type LanguageSwitcherProps = {
  /** Extra positioning styles for the CTA — e.g. absolute placement. */
  style?: StyleProp<ViewStyle>;
  /**
   * Delay (ms) after mount before the language label animates away, leaving
   * just the icon. Pass `null` to keep the label visible.
   */
  collapseLabelAfterMs?: number | null;
};

/**
 * Pill CTA that opens a bottom-sheet language picker. Selecting a language
 * persists it and refreshes the whole app (see `I18nProvider`).
 *
 * On mount the pill shows the current language's native label, then after
 * `collapseLabelAfterMs` it animates down to the bare icon.
 */
export function LanguageSwitcher({
  style,
  collapseLabelAfterMs = 1000,
}: LanguageSwitcherProps) {
  const { t, language, setLanguage } = useTranslation();
  const [open, setOpen] = useState(false);

  // 1 = label fully shown, 0 = collapsed to the icon.
  const reveal = useRef(new Animated.Value(1)).current;
  const [labelWidth, setLabelWidth] = useState<number | null>(null);

  const onLabelLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setLabelWidth(prev => (prev == null ? w : prev));
  };

  useEffect(() => {
    if (collapseLabelAfterMs == null) {
      return;
    }
    const timer = setTimeout(() => {
      Animated.timing(reveal, {
        toValue: 0,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }, collapseLabelAfterMs);
    return () => clearTimeout(timer);
  }, [collapseLabelAfterMs, reveal]);

  const labelStyle = {
    opacity: reveal,
    marginLeft: reveal.interpolate({
      inputRange: [0, 1],
      outputRange: [0, spacing.xs],
    }),
    ...(labelWidth != null && {
      width: reveal.interpolate({
        inputRange: [0, 1],
        outputRange: [0, labelWidth],
      }),
    }),
  };

  const handleSelect = (next: Language) => {
    setOpen(false);
    if (next.key !== language.key) {
      setLanguage(next.key);
    }
  };

  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('language.select')}
        hitSlop={8}
        onPress={() => setOpen(true)}
        style={({ pressed }) => [
          styles.cta,
          pressed && styles.ctaPressed,
          style,
        ]}
      >
        <HugeIcon icon={LanguageSquareIcon} size={16} color={colors.white} />
        <Animated.View style={[styles.labelWrap, labelStyle]}>
          <Text
            variant="label"
            numberOfLines={1}
            onLayout={onLabelLayout}
            style={[
              styles.ctaText,
              labelWidth != null && { width: labelWidth },
            ]}
          >
            {language.nativeLabel}
          </Text>
        </Animated.View>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />
        <View style={styles.sheet}>
          <View style={styles.sheetHeader}>
            <Text variant="h4">{t('language.select')}</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('language.close')}
              hitSlop={8}
              onPress={() => setOpen(false)}
            >
              <CloseIcon width={22} height={22} color={colors.text.muted} />
            </Pressable>
          </View>

          <FlatList
            data={LANGUAGES}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={RowDivider}
            renderItem={({ item }) => {
              const selected = item.key === language.key;
              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  style={styles.row}
                  onPress={() => handleSelect(item)}
                >
                  <View style={styles.rowText}>
                    <Text variant="body" color={colors.text.primary}>
                      {item.nativeLabel}
                    </Text>
                    {item.nativeLabel !== item.label ? (
                      <Text variant="caption" color={colors.text.muted}>
                        {item.label}
                      </Text>
                    ) : null}
                  </View>
                  {selected ? (
                    <CheckIcon width={20} height={20} color={colors.primary} />
                  ) : null}
                </Pressable>
              );
            }}
          />
        </View>
      </Modal>
    </>
  );
}

function RowDivider() {
  return <View style={styles.rowDivider} />;
}

const styles = StyleSheet.create({
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    // No `gap` — the label's own animated marginLeft supplies the spacing so it
    // collapses together with the label width.
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    // Black background at 0.6 opacity; the label sits on top at full opacity.
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  ctaPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  labelWrap: {
    overflow: 'hidden',
  },
  ctaText: {
    color: colors.white,
    opacity: 1,
    letterSpacing: 0.3,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
  },
  sheet: {
    marginTop: 'auto',
    maxHeight: '70%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: borderRadius['2xl'],
    borderTopRightRadius: borderRadius['2xl'],
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  rowText: {
    flex: 1,
    gap: spacing.xxs,
  },
  rowDivider: {
    height: borderWidth.hairline,
    backgroundColor: colors.border.default,
  },
});
