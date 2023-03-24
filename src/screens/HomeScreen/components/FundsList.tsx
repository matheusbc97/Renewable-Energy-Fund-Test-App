import {View, SafeAreaView, StyleProp, ViewStyle, FlatList} from 'react-native';
import {Text} from '../../../components';
import {COLORS} from '../../../constants/colors';

export function FundsList() {
  return (
    <View>
      <Text
        variant="title"
        colorVariant="onPrimaryVariant"
        style={{paddingHorizontal: 20, marginTop: 20}}>
        Funds
      </Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        horizontal
        style={{paddingHorizontal: 12, marginTop: 15}}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.border,
              marginHorizontal: 6,
              width: 140,
              height: 145,
              padding: 12,
              borderRadius: 3,
            }}>
            <Text variant="title-small">Wind Fund</Text>
            <View style={{flex: 1}} />
            <Text colorVariant="onPrimaryVariant">$1,245.23</Text>
          </View>
        )}
      />
    </View>
  );
}
