import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgIcon, Text} from '../../../components';
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

function Header({options, navigation, back}: NativeStackHeaderProps) {
  const insetsTop = useSafeAreaInsets().top;
  return (
    <View
      style={{
        paddingTop: insetsTop,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        height: 60 + insetsTop,
      }}>
      {back && (
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgIcon name="ArrowLeft" color={COLORS.onBackground} />
          </TouchableOpacity>
        </View>
      )}

      <View style={{alignItems: 'center'}}>
        <Text variant="title">{options.title}</Text>
        <Text colorVariant="onBackgroundVariant">{options.subtitle}</Text>
      </View>

      <View style={{flex: 1}} />
    </View>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{title: '', headerLeft: LeftIcon, header: Header}}>
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
