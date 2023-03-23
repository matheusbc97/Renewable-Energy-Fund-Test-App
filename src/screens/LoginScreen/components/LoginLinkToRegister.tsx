import {View} from 'react-native';

import {TextLink, Text} from '../../../components';

export default function LoginLinkToRegister() {
  return (
    <View style={{alignItems: 'center', marginVertical: 13}}>
      <Text colorVariant="onPrimary">
        Don't have an account yet?{' '}
        <TextLink onPress={() => {}}>Sing up</TextLink> here
      </Text>
    </View>
  );
}
