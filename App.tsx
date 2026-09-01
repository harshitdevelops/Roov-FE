/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, StyleSheet, View, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/assets/images';
import {brand} from './src/theme';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Image
          source={images.appIcon}
          style={styles.appIcon}
          accessibilityLabel="Roov app icon"
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brand.splashBackground,
  },
  appIcon: {
    width: brand.appIconSize.xl,
    height: brand.appIconSize.xl,
    borderRadius: 40,
  },
});

export default App;
