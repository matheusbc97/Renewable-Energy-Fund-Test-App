import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SvgIcon} from '../../../components';
import {COLORS} from '../../../constants/colors';

import {
  FundDetailsScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
} from '../../../screens';
import BottomTabsNavigator from '../BottomTabsNavigator';

import {StackParams} from './types/StackParams';

interface RenderLeftIconProps {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  labelVisible?: boolean;
}

const renderLeftIcon = (_: RenderLeftIconProps) => {
  return <SvgIcon name="ArrowLeft" color={COLORS.onBackground} />;
};

const Stack = createNativeStackNavigator<StackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{title: '', headerLeft: renderLeftIcon}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FundDetails" component={FundDetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
