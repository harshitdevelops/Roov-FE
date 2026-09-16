import { useCallback, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashFlow } from './src/components/splash/SplashFlow';
import { TabBar, type TabKey } from './src/components/navigation';
import { DiscoverScreen } from './src/screens/DiscoverScreen';
import { FeedScreen } from './src/screens/FeedScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MyRidesScreen } from './src/screens/MyRidesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { WalkthroughScreen } from './src/screens/WalkthroughScreen';
import {
  hasCompletedWalkthrough,
  markWalkthroughCompleted,
} from './src/lib/walkthrough';
import { clearLoggedIn, isLoggedIn, markLoggedIn } from './src/lib/session';
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
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const handleSplashFinish = useCallback(() => {
    isLoggedIn().then(loggedIn => {
      if (loggedIn) {
        setPhase('home');
        return;
      }
      hasCompletedWalkthrough().then(done => {
        setPhase(done ? 'login' : 'walkthrough');
      });
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
    markLoggedIn().finally(() => {
      setActiveTab('home');
      setPhase('home');
    });
  }, []);

  const handleLogout = useCallback(() => {
    clearLoggedIn().finally(() => {
      setPhase('login');
    });
  }, []);

  const handleHostRide = useCallback(() => {}, []);
  const handleJoinRide = useCallback(() => {}, []);
  const handleOpenProfile = useCallback(() => {
    setActiveTab('profile');
  }, []);

  return (
    <>
      <StatusBar
        barStyle={DARK_PHASES.has(phase) ? 'light-content' : 'dark-content'}
      />
      <View style={styles.root}>
        {phase === 'home' ? (
          <View style={styles.tabbedRoot}>
            <View style={styles.tabbedContent}>
              {activeTab === 'home' ? (
                <HomeScreen
                  onHostRide={handleHostRide}
                  onJoinRide={handleJoinRide}
                  onOpenProfile={handleOpenProfile}
                />
              ) : null}
              {activeTab === 'myRides' ? <MyRidesScreen /> : null}
              {activeTab === 'feed' ? <FeedScreen /> : null}
              {activeTab === 'discover' ? <DiscoverScreen /> : null}
              {activeTab === 'profile' ? (
                <ProfileScreen onLogout={handleLogout} />
              ) : null}
            </View>
            <TabBar active={activeTab} onChange={setActiveTab} />
          </View>
        ) : null}
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
  tabbedRoot: {
    flex: 1,
  },
  tabbedContent: {
    flex: 1,
  },
  splash: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
