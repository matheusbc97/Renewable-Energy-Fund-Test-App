import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from './StackParams';

export type StackNavigationProp<T extends keyof StackParams> =
  NativeStackNavigationProp<StackParams, T>;

export interface IStackScreenProps<T extends keyof StackParams> {
  navigation: StackNavigationProp<T>;
  route: RouteProp<StackParams, T>;
}
