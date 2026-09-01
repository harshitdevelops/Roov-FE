import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, View, type ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {brand, colors} from '../../../theme';
import {RoovPinLogo} from '../RoovPinLogo';
import {styles} from './styles';

const LETTERS = ['R', 'o', 'o', 'v'] as const;
const LETTER_OFFSETS = [-1.5, -0.5, 0.5, 1.5] as const;

const DOT_COLORS = [
  colors.text.secondary,
  colors.status.warning,
  colors.status.success,
] as const;

const TIMING = {
  /** Boot fade-in, then shift/spread/logo, then brief hold — totals 5s. */
  bootFadeInMs: 0,
  bootShiftDownMs: 3100,
  logoAppearMs: 2600,
  logoDelayMs: 320,
  letterSpreadMs: 3100,
  pauseBeforeMainMs: 1000,
  /** Loading dots stay visible before zoom begins. */
  dotsVisibleMs: 2000,
  /** Main zoom-out splash phase. */
  mainDurationMs: 2000,
} as const;

const INTRO_DURATION_MS =
  TIMING.bootFadeInMs + TIMING.bootShiftDownMs + TIMING.pauseBeforeMainMs;

const SMOOTH_OUT = Easing.bezier(0.22, 1, 0.36, 1);
const SMOOTH_IN_OUT = Easing.bezier(0.45, 0, 0.55, 1);

type SplashFlowProps = {
  onFinish: () => void;
  style?: ViewStyle;
};

function AnimatedDot({
  color,
  delayMs,
  enabled,
}: {
  color: string;
  delayMs: number;
  enabled: boolean;
}) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const animation = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        delay: delayMs,
        easing: SMOOTH_OUT,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 400,
        delay: delayMs,
        easing: SMOOTH_OUT,
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    return () => {
      animation.stop();
    };
  }, [delayMs, enabled, opacity, scale]);

  return (
    <Animated.View
      style={[
        styles.dot,
        {backgroundColor: color},
        {opacity, transform: [{scale}]},
      ]}
    />
  );
}

function SpacedLetterTitle({
  opacity,
  spread,
  scale,
}: {
  opacity: Animated.Value;
  spread: Animated.Value;
  scale: Animated.AnimatedInterpolation<number>;
}) {
  return (
    <Animated.View
      style={[
        styles.titleRow,
        {
          opacity,
          transform: [{scale}],
        },
      ]}>
      {LETTERS.map((letter, index) => {
        const offsetX = spread.interpolate({
          inputRange: [0, 1],
          outputRange: [0, LETTER_OFFSETS[index] * 11],
        });

        return (
          <Animated.Text
            key={`${letter}-${index}`}
            style={[
              styles.letter,
              {
                transform: [{translateX: offsetX}],
              },
            ]}>
            {letter}
          </Animated.Text>
        );
      })}
    </Animated.View>
  );
}

export function SplashFlow({onFinish, style}: SplashFlowProps) {
  const insets = useSafeAreaInsets();
  const [mainStarted, setMainStarted] = useState(false);

  const bootOpacity = useRef(new Animated.Value(0)).current;
  const bootTranslateY = useRef(new Animated.Value(-10)).current;
  const letterSpread = useRef(new Animated.Value(0)).current;
  const titleScale = useRef(new Animated.Value(1.23)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.9)).current;
  const logoTranslateY = useRef(new Animated.Value(-14)).current;
  const mainProgress = useRef(new Animated.Value(0)).current;
  const shellOpacity = useRef(new Animated.Value(1)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineTranslateY = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    const introEndMs = INTRO_DURATION_MS;

    const animation = Animated.sequence([
      Animated.timing(bootOpacity, {
        toValue: 1,
        duration: TIMING.bootFadeInMs,
        easing: SMOOTH_OUT,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(bootTranslateY, {
          toValue: 38,
          duration: TIMING.bootShiftDownMs,
          easing: SMOOTH_IN_OUT,
          useNativeDriver: true,
        }),
        Animated.timing(letterSpread, {
          toValue: 1,
          duration: TIMING.letterSpreadMs,
          easing: SMOOTH_IN_OUT,
          useNativeDriver: true,
        }),
        Animated.timing(titleScale, {
          toValue: 1,
          duration: TIMING.letterSpreadMs,
          easing: SMOOTH_IN_OUT,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.delay(TIMING.logoDelayMs),
          Animated.parallel([
            Animated.timing(logoOpacity, {
              toValue: 1,
              duration: TIMING.logoAppearMs,
              easing: SMOOTH_OUT,
              useNativeDriver: true,
            }),
            Animated.timing(logoScale, {
              toValue: 1,
              duration: TIMING.logoAppearMs,
              easing: SMOOTH_OUT,
              useNativeDriver: true,
            }),
            Animated.timing(logoTranslateY, {
              toValue: 0,
              duration: TIMING.logoAppearMs,
              easing: SMOOTH_OUT,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ]),
      Animated.delay(TIMING.pauseBeforeMainMs),
      Animated.delay(TIMING.dotsVisibleMs),
      Animated.timing(mainProgress, {
        toValue: 1,
        duration: TIMING.mainDurationMs,
        easing: SMOOTH_IN_OUT,
        useNativeDriver: true,
      }),
    ]);

    const dotsTimer = setTimeout(() => {
      setMainStarted(true);

      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 650,
          delay: 200,
          easing: SMOOTH_OUT,
          useNativeDriver: true,
        }),
        Animated.timing(taglineTranslateY, {
          toValue: 0,
          duration: 650,
          delay: 200,
          easing: SMOOTH_OUT,
          useNativeDriver: true,
        }),
      ]).start();
    }, introEndMs);

    animation.start(({finished}) => {
      if (finished) {
        Animated.timing(shellOpacity, {
          toValue: 0,
          duration: 260,
          easing: SMOOTH_OUT,
          useNativeDriver: true,
        }).start(({finished: fadeFinished}) => {
          if (fadeFinished) {
            onFinish();
          }
        });
      }
    });

    return () => {
      animation.stop();
      clearTimeout(dotsTimer);
    };
  }, [
    bootOpacity,
    bootTranslateY,
    letterSpread,
    logoOpacity,
    logoScale,
    logoTranslateY,
    mainProgress,
    onFinish,
    shellOpacity,
    taglineOpacity,
    taglineTranslateY,
    titleScale,
  ]);

  const heroScale = mainProgress.interpolate({
    inputRange: [0, 0.2, 0.55, 1],
    outputRange: [1, 1, 1, 26],
  });

  const heroOpacity = mainProgress.interpolate({
    inputRange: [0, 0.2, 0.55, 1],
    outputRange: [1, 1, 1, 0],
  });

  const backdropOpacity = mainProgress.interpolate({
    inputRange: [0, 0.55, 1],
    outputRange: [1, 1, 0],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          opacity: Animated.multiply(backdropOpacity, shellOpacity),
        },
      ]}>
      <Animated.View
        style={[
          styles.hero,
          {
            opacity: heroOpacity,
            transform: [{scale: heroScale}],
          },
        ]}>
        <Animated.View
          style={[
            styles.heroContent,
            {transform: [{translateY: bootTranslateY}]},
          ]}>
          <Animated.View
            style={{
              opacity: logoOpacity,
              transform: [{scale: logoScale}, {translateY: logoTranslateY}],
            }}>
            <RoovPinLogo />
          </Animated.View>

          <SpacedLetterTitle
            opacity={bootOpacity}
            spread={letterSpread}
            scale={titleScale}
          />

          <View style={styles.dotsRow}>
            {mainStarted
              ? DOT_COLORS.map((dotColor, index) => (
                  <AnimatedDot
                    key={dotColor}
                    color={dotColor}
                    enabled={mainStarted}
                    delayMs={index * 180}
                  />
                ))
              : null}
          </View>
        </Animated.View>
      </Animated.View>

      <Animated.Text
        style={[
          styles.tagline,
          {
            bottom: Math.max(insets.bottom, 24) + 20,
            opacity: taglineOpacity,
            transform: [{translateY: taglineTranslateY}],
          },
        ]}>
        {brand.splashTagline}
      </Animated.Text>
    </Animated.View>
  );
}
