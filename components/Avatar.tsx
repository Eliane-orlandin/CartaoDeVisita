import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar as AvatarRN } from 'react-native-paper';
import { AvatarImageSource } from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';

interface AvatarProps {
  size: number;
  source: AvatarImageSource;
}

function Avatar(props: AvatarProps): React.ReactNode {
  return (
    <View style={styles.container}>
      <AvatarRN.Image size={props.size} source={props.source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    marginTop: 72,
  },
});

export default Avatar;
