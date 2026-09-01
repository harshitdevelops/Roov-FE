import {useCallback, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SplashFlow} from './src/components/splash/SplashFlow';
import {HomeScreen} from './src/screens/HomeScreen';
import {brand} from './src/theme';

type AppPhase = 'splash' | 'home';

function App() {
  const [phase, setPhase] = useState<AppPhase>('splash');
  const handleSplashFinish = useCallback(() => {
    setPhase('home');
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={phase === 'splash' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.root}>
        {phase === 'home' ? <HomeScreen /> : null}
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
