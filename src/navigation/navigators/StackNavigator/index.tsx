import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FundDetailsScreen, LoginScreen, RegisterScreen} from '../../../screens';
import BottomTabsNavigator from '../BottomTabsNavigator';
import Header from './components/Header';

import {StackParams} from './types/StackParams';

const Stack = createNativeStackNavigator<StackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{title: '', header: Header}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FundDetails"
        component={FundDetailsScreen}
        options={{title: 'FundDetails'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
