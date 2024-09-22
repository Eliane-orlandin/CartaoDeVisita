/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import App from './App';
import { name as appName } from './app.json';

const fontConfig = {
  profileName: {
    fontFamily: 'Nexa-Heavy',
    fontWeight: '400',
    lineHeight: 48,
    fontSize: 42,
  },
  profileRole: {
    fontFamily: 'Nexa-Heavy',
    fontWeight: '400',
    lineHeight: 22,
    fontSize: 20,
  },
  profileBusisness: {
    fontFamily: 'Nexa-Heavy',
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 24,
  },
  cardLink: {
    fontFamily: 'Nexa-Heavy',
    fontWeight: '800',
    fontSize: 18,
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(185, 12, 85)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(255, 217, 223)',
    onPrimaryContainer: 'rgb(63, 0, 24)',
    secondary: 'rgb(117, 86, 92)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(255, 217, 223)',
    onSecondaryContainer: 'rgb(43, 21, 26)',
    tertiary: 'rgb(122, 87, 51)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 220, 189)',
    onTertiaryContainer: 'rgb(44, 22, 0)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(32, 26, 27)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(32, 26, 27)',
    surfaceVariant: 'rgb(243, 221, 224)',
    onSurfaceVariant: 'rgb(82, 67, 70)',
    outline: 'rgb(132, 115, 117)',
    outlineVariant: 'rgb(214, 194, 196)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(53, 47, 48)',
    inverseOnSurface: 'rgb(250, 238, 239)',
    inversePrimary: 'rgb(255, 177, 194)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(252, 239, 247)',
      level2: 'rgb(249, 232, 241)',
      level3: 'rgb(247, 225, 236)',
      level4: 'rgb(247, 222, 235)',
      level5: 'rgb(245, 218, 231)',
    },
    surfaceDisabled: 'rgba(32, 26, 27, 0.12)',
    onSurfaceDisabled: 'rgba(32, 26, 27, 0.38)',
    backdrop: 'rgba(58, 45, 47, 0.4)',
  },
  fonts: configureFonts({ config: fontConfig }),
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
