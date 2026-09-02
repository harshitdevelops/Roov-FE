import { useCallback, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashFlow } from './src/components/splash/SplashFlow';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { WalkthroughScreen } from './src/screens/WalkthroughScreen';
import {
  hasCompletedWalkthrough,
  markWalkthroughCompleted,
} from './src/lib/walkthrough';
import { I18nProvider } from './src/i18n';
import { brand } from './src/theme';

type AppPhase = 'splash' | 'walkthrough' | 'login' | 'home';

const DARK_PHASES: ReadonlySet<AppPhase> = new Set(['splash', 'walkthrough']);

/**
 * Everything below `I18nProvider`. Lives in its own component because the
 * provider remounts this subtree on a language change — a full app refresh,
 * which also resets `phase` back to the splash flow in the new language.
 */
function AppShell() {
  const [phase, setPhase] = useState<AppPhase>('splash');

  const handleSplashFinish = useCallback(() => {
    hasCompletedWalkthrough().then(done => {
      setPhase(done ? 'login' : 'walkthrough');
    });
  }, []);

  const handleWalkthroughFinish = useCallback(() => {
    // Persist the completion flag before moving on so the walkthrough does not
    // resurface on the next launch — this fires for both "Let's Ride" and "Skip".
    markWalkthroughCompleted().finally(() => {
      setPhase('login');
    });
  }, []);

  const handleLoginContinue = useCallback(() => {
    setPhase('home');
  }, []);

  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <I18nProvider>
        <AppShell />
      </I18nProvider>
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
