import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from './StackParams';

export interface IStackScreenProps<T extends keyof StackParams> {
  navigation: NativeStackNavigationProp<StackParams, T>;
  route: RouteProp<StackParams, T>;
}
