/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/assets/images';
import {brand, colors, font, typography} from './src/theme';

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
        <Text style={styles.appName}>
          Singapore
        </Text>
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
  },
  appName: {
    ...typography.h3,
    fontFamily: font.regular,
    color: colors.text.inverse,
  },
});

export default App;
