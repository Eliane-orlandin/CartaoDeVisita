import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Portal, useTheme } from 'react-native-paper';
import { default as QRCodeRN } from 'react-native-qrcode-skia';
import { RadialGradient } from '@shopify/react-native-skia';
import { PROFILE } from '../constants';

interface QRCodeProps {
  visible: boolean;
  onDismiss: () => void;
}

function QRCode(props: QRCodeProps): React.ReactNode {
  const theme = useTheme();

  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.onDismiss}
        contentContainerStyle={styles.container}>
        <QRCodeRN
          value={`https://www.instagram.com.br/${PROFILE.INSTAGRAM}`}
          size={200}
          shapeOptions={{
            shape: 'circle',
            eyePatternShape: 'rounded',
            eyePatternGap: 0,
            gap: 0,
          }}
          logoAreaSize={70}
          logo={
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>💇‍♀️</Text>
            </View>
          }>
          <RadialGradient
            c={{ x: 100, y: 100 }}
            r={100}
            colors={[theme.colors.primary, theme.colors.secondary]}
          />
        </QRCodeRN>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 28,
    margin: 12,
    borderRadius: 12,
  },
  logoContainer: {
    height: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 38,
  },
  logoText: {
    fontSize: 38,
  },
});

export default QRCode;
