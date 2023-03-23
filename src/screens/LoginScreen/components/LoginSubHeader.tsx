import {View} from 'react-native';

import {Text} from '../../../components';

export default function LoginSubHeader() {
  return (
    <View style={{marginVertical: 20, alignItems: 'center'}}>
      <Text variant="title" colorVariant="onPrimaryVariant">
        Login
      </Text>
    </View>
  );
}
