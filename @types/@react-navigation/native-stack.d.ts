import '@react-navigation/native-stack/src/types';
import {NativeStackNavigationOptions as INativeStackNavigationOptions} from '@react-navigation/native-stack/src/types';

declare module '@react-navigation/native-stack' {
  export interface NativeStackNavigationOptions
    extends INativeStackNavigationOptions {
    subtitle?: string;
  }
}
