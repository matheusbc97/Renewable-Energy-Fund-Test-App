import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen} from '../screens';

import {StackParams} from './types/StackParams';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createNativeStackNavigator<StackParams>();

function AppNavigator() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{title: ''}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
