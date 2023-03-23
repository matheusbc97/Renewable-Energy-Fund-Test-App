import {SafeAreaView, View} from 'react-native';
import {TextInput, Text, Button, TextLink} from '../../components';
import {IStackScreenProps} from '../../navigation';

export function LoginScreen({}: IStackScreenProps<'Login'>) {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Text variant="title" colorVariant="onPrimaryVariant">
            Login
          </Text>
        </View>

        <View style={{marginVertical: 5}}>
          <TextInput label="E-mail" />
          <TextInput label="Password" />
        </View>

        <Button label="Login" style={{marginTop: 27}} onPress={() => {}} />

        <View style={{alignItems: 'center', marginVertical: 13}}>
          <Text colorVariant="onPrimary">
            Don't have an account yet?{' '}
            <TextLink onPress={() => {}}>Sing up </TextLink>
            here
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
