import {useCallback, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SplashFlow} from './src/components/splash/SplashFlow';
import {HomeScreen} from './src/screens/HomeScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import {WalkthroughScreen} from './src/screens/WalkthroughScreen';
import {
  hasCompletedWalkthrough,
  markWalkthroughCompleted,
} from './src/lib/walkthrough';
import {brand} from './src/theme';

type AppPhase = 'splash' | 'walkthrough' | 'login' | 'home';

const DARK_PHASES: ReadonlySet<AppPhase> = new Set(['splash', 'walkthrough']);

function App() {
  const [phase, setPhase] = useState<AppPhase>('splash');

  const handleSplashFinish = useCallback(() => {
    hasCompletedWalkthrough().then(done => {
      setPhase(done ? 'login' : 'walkthrough');
    });
  }, []);

  const handleWalkthroughFinish = useCallback(() => {
    markWalkthroughCompleted();
    setPhase('login');
  }, []);

  const handleLoginContinue = useCallback(() => {
    setPhase('home');
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={DARK_PHASES.has(phase) ? 'light-content' : 'dark-content'}
      />
      <View style={styles.root}>
        {phase === 'home' ? <HomeScreen /> : null}
        {phase === 'login' ? (
          <LoginScreen onContinue={handleLoginContinue} />
        ) : null}
        {phase === 'walkthrough' ? (
          <WalkthroughScreen onFinish={handleWalkthroughFinish} />
        ) : null}
        {phase === 'splash' ? (
          <SplashFlow onFinish={handleSplashFinish} style={styles.splash} />
        ) : null}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: brand.splashOverlay,
  },
  splash: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
