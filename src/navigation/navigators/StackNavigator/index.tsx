import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import {SvgIcon} from '../../../components';
import {COLORS} from '../../../constants/colors';

import {FundDetailsScreen, LoginScreen, RegisterScreen} from '../../../screens';
import BottomTabsNavigator from '../BottomTabsNavigator';

import {StackParams} from './types/StackParams';

interface RenderLeftIconProps {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  labelVisible?: boolean;
}

const LeftIcon = ({}: RenderLeftIconProps) => {
  const navigation = useNavigation();

  if (navigation.canGoBack() === false) {
    return null;
  }
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <SvgIcon name="ArrowLeft" color={COLORS.onBackground} />
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator<StackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{title: '', headerLeft: LeftIcon}}>
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
