import {View} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {Text} from '../../../components';
import {SvgXml} from 'react-native-svg';
import {BusinessStatics} from '../../../../assets/business-statistics';

export default function HomeBanner() {
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
      }}>
      <View style={{flex: 1, paddingVertical: 20}}>
        <Text colorVariant="onSecondary" variant="title">
          Learn more about carbon credits
        </Text>
        <Text
          variant="text-small"
          colorVariant="onSecondary"
          style={{marginTop: 10}}>
          Check out our top tips
        </Text>
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <SvgXml xml={BusinessStatics} />
      </View>
    </View>
  );
}
