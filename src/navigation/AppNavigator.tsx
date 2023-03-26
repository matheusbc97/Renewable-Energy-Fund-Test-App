import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import StackNavigator from './navigators/StackNavigator';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

function AppNavigator() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
