import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowLeftIcon, BikeIcon} from '../../components/icons';
import {colors} from '../../theme';
import {WALKTHROUGH_STEPS, WALKTHROUGH_TITLE_LEAD} from './steps';
import {styles, TITLE_LINE_HEIGHT} from './styles';

const EASE = Easing.bezier(0.22, 1, 0.36, 1);
const LAST_STEP = WALKTHROUGH_STEPS.length - 1;

type WalkthroughScreenProps = {
  /** Fired when the walkthrough is dismissed — via "Let's Ride" or "Skip". */
  onFinish: () => void;
};

export function WalkthroughScreen({onFinish}: WalkthroughScreenProps) {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(0);
  const isLast = step === LAST_STEP;

  // Only the second word animates: the outgoing word scrolls up and fades,
  // the incoming word rises from below. The lead word ("Your") stays put.
  const wordOpacity = useRef(new Animated.Value(1)).current;
  const wordTranslateY = useRef(new Animated.Value(0)).current;

  const transitionTo = useCallback(
    (next: number) => {
      Animated.parallel([
        Animated.timing(wordOpacity, {
          toValue: 0,
          duration: 160,
          easing: EASE,
          useNativeDriver: true,
        }),
        Animated.timing(wordTranslateY, {
          toValue: -TITLE_LINE_HEIGHT,
          duration: 160,
          easing: EASE,
          useNativeDriver: true,
        }),
      ]).start(({finished}) => {
        if (!finished) {
          return;
        }
        wordTranslateY.setValue(TITLE_LINE_HEIGHT);
        setStep(next);
      });
    },
    [wordOpacity, wordTranslateY],
  );

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.timing(wordOpacity, {
        toValue: 1,
        duration: 260,
        easing: EASE,
        useNativeDriver: true,
      }),
      Animated.timing(wordTranslateY, {
        toValue: 0,
        duration: 260,
        easing: EASE,
        useNativeDriver: true,
      }),
    ]);
    animation.start();
    return () => animation.stop();
  }, [step, wordOpacity, wordTranslateY]);

  // The description slides in from the right and settles, then slides left out.
  const descriptionTranslateX = wordTranslateY.interpolate({
    inputRange: [-TITLE_LINE_HEIGHT, 0, TITLE_LINE_HEIGHT],
    outputRange: [-24, 0, 24],
  });

  const goNext = useCallback(() => {
    if (isLast) {
      onFinish();
      return;
    }
    transitionTo(step + 1);
  }, [isLast, onFinish, step, transitionTo]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 8,
          paddingBottom: Math.max(insets.bottom, 20) + 8,
        },
      ]}>
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{WALKTHROUGH_TITLE_LEAD} </Text>
            <View style={styles.wordClip}>
              <Animated.Text
                style={[
                  styles.title,
                  {
                    opacity: wordOpacity,
                    transform: [{translateY: wordTranslateY}],
                  },
                ]}>
                {WALKTHROUGH_STEPS[step].word}
              </Animated.Text>
            </View>
          </View>

          <Animated.Text
            style={[
              styles.description,
              {
                opacity: wordOpacity,
                transform: [{translateX: descriptionTranslateX}],
              },
            ]}>
            {WALKTHROUGH_STEPS[step].description}
          </Animated.Text>
        </View>

        {!isLast ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Skip walkthrough"
            hitSlop={12}
            onPress={onFinish}>
            <Text style={styles.skip}>Skip</Text>
          </Pressable>
        ) : null}
      </View>

      <Pressable
        style={styles.body}
        onPress={isLast ? undefined : goNext}
        accessibilityRole={isLast ? undefined : 'button'}
        accessibilityLabel={isLast ? undefined : 'Next'}
      />

      <View style={styles.footer}>
        <View style={styles.dotsRow}>
          {WALKTHROUGH_STEPS.map((item, index) => (
            <View
              key={item.key}
              style={[styles.dot, index === step && styles.dotActive]}
            />
          ))}
        </View>

        {isLast ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Let's Ride"
            onPress={onFinish}
            style={({pressed}) => [styles.cta, pressed && styles.ctaPressed]}>
            <Text style={styles.ctaText}>Let's Ride</Text>
            <BikeIcon width={22} height={22} color="#FFFFFF" />
          </Pressable>
        ) : (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Next"
            hitSlop={8}
            onPress={goNext}
            style={({pressed}) => [
              styles.nextButton,
              pressed && styles.nextButtonPressed,
            ]}>
            <View style={styles.flipHorizontal}>
              <ArrowLeftIcon color={colors.text.secondary} />
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}
