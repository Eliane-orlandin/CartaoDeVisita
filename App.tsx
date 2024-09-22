import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
// Módulos de terceiros
import { Card, Icon, Portal, Text, useTheme } from 'react-native-paper';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
// Internos
import Avatar from './components/Avatar';
import { BUSINESS, CARDINFO, PROFILE } from './constants';
import FABGroup from './components/FABGroup';

function App(): React.JSX.Element {
  const theme = useTheme();
  const viewShotRef = React.useRef(null);

  const captureAndShareScreenshot = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'png',
        quality: 0.8,
      });

      await Share.open({
        url: uri,
        title: 'Compartilhar Captura de Tela',
        message: CARDINFO,
      });
    } catch (error) {
      console.error('Erro ao capturar e compartilhar', error);
    }
  };

  return (
    <Portal>
      <StatusBar
        animated={true}
        backgroundColor='transparent'
        barStyle={'dark-content'}
        translucent={true}
      />
      <ViewShot
        ref={viewShotRef}
        style={{
          ...styles.container,
          backgroundColor: theme.colors.primaryContainer,
        }}>
        <Avatar size={128} source={require('./assets/avatar.png')} />
        <View style={styles.profileContainer}>
          <Text variant='profileName'>{PROFILE.NAME}</Text>
          <Text variant='profileRole'>{PROFILE.ROLE}</Text>
          <View style={styles.textBusisnessContainer}>
            <Text variant='profileBusisness'>{BUSINESS.NAME}</Text>
          </View>
        </View>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.cardContentContainer}>
            <View
              style={{
                ...styles.containerLine,
                backgroundColor: theme.colors.secondaryContainer,
              }}>
              <View style={styles.iconContainer}>
                <Icon source='phone' size={20} />
              </View>
              <Text variant='cardLink'>{PROFILE.PHONE}</Text>
            </View>
            <View
              style={{
                ...styles.containerLine,
                backgroundColor: theme.colors.secondaryContainer,
              }}>
              <View style={styles.iconContainer}>
                <Icon source='instagram' size={20} />
              </View>
              <Text variant='cardLink'>{PROFILE.INSTAGRAM}</Text>
            </View>
            <View
              style={{
                ...styles.containerLine,
                backgroundColor: theme.colors.secondaryContainer,
              }}>
              <View style={styles.iconContainer}>
                <Icon source='earth' size={20} />
              </View>
              <Text variant='cardLink'>{BUSINESS.ADDRESS}</Text>
            </View>
          </Card.Content>
        </Card>
      </ViewShot>
      <FABGroup capture={captureAndShareScreenshot} />
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  textBusisnessContainer: {
    marginTop: 24,
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 8,
    marginVertical: 4,
    padding: 8,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 24,
    padding: 4,
    borderWidth: 2,
    marginBottom: 8,
  },
  cardContentContainer: {
    justifyContent: 'space-evenly',
  },
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
