import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SvgIcon, Text} from '../../../../components';
import {COLORS} from '../../../../constants/colors';

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

export default Header;
