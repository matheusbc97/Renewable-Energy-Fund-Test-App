import {useState} from 'react';
import {FieldValues} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import {SmartTextInput, ISmartTextInputProps} from '../SmartTextInput';
import {Ionicons} from '@expo/vector-icons';
import {COLORS} from '../../constants/colors';

export function PasswordSmartTextInput<T extends FieldValues>({
  label = 'Password',
  placeholder = 'Minimum 8 characters',
  ...rest
}: Omit<ISmartTextInputProps<T>, 'secureTextEntry' | 'rightComponent'>) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <SmartTextInput
      label={label}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      rightComponent={
        <TouchableOpacity
          onPress={() => setSecureTextEntry(oldState => !oldState)}
          style={{
            paddingVertical: 6,
            paddingHorizontal: 10,
          }}>
          <Ionicons
            name={secureTextEntry ? 'eye-outline' : 'eye'}
            size={20}
            color={COLORS.onBackgroundVariant}
          />
        </TouchableOpacity>
      }
      {...rest}
    />
  );
}
