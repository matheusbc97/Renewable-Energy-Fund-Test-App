import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native';

import {HomeScreen} from '../../../screens';
import {BottomTabsNavigatorParams} from './types/BottomTabsNavigatorParams';
import {COLORS} from '../../../constants/colors';
import {SvgIconName, SvgIcon, Text} from '../../../components';

const Tab = createBottomTabNavigator<BottomTabsNavigatorParams>();

function EmptyScreen() {
  return (
    <SafeAreaView>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sequi
        necessitatibus deserunt quas sed! Corrupti, minus quis incidunt
        laboriosam at cum cumque quidem voluptate eligendi, ducimus blanditiis
        nemo suscipit perspiciatis.
      </Text>
    </SafeAreaView>
  );
}

const renderIcon = (iconName: SvgIconName) => {
  return (props: {focused: boolean; color: string; size: number}) => {
    const {focused} = props;
    return (
      <SvgIcon
        name={iconName}
        color={focused ? COLORS.primary : COLORS.onBackground}
      />
    );
  };
};

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: COLORS.onBackground,
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: renderIcon('Home'),
        }}
      />
      <Tab.Screen
        options={{tabBarIcon: renderIcon('Trade')}}
        name="Trade"
        component={EmptyScreen}
      />
      <Tab.Screen
        name="Portfolio"
        component={EmptyScreen}
        options={{tabBarIcon: renderIcon('Portfolio')}}
      />
    </Tab.Navigator>
  );
}
