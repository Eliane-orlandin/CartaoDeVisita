import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import QRCode from './QrCode';

interface FABGroupPropsType {
  capture: () => void;
}

const FABGroup = (props: FABGroupPropsType) => {
  const [state, setState] = React.useState({ open: false });
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <>
      <QRCode visible={visible} onDismiss={hideModal} />
      <FAB.Group
        open={open}
        visible
        icon={open ? 'minus' : 'plus'}
        actions={[
          {
            icon: 'email',
            label: 'Compartilhar',
            onPress: () => props.capture(),
          },
          {
            icon: 'qrcode',
            label: 'QR Code',
            onPress: () => showModal(),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            setState({ open: false });
          }
        }}
        style={styles.fabStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fabStyle: {
    position: 'absolute',
    opacity: 0.9,
  },
});

export default FABGroup;
