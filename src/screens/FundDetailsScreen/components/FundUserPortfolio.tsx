import {View} from 'react-native';
import {Button, Text} from '../../../components';

export default function FundUserPortfolio() {
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 60}}>
      <View style={{flexDirection: 'row'}}>
        <Text variant="title">Your Portfolio</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text variant="title-big">18 Credits</Text>
          <Text>8.41%</Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text variant="title-big">$328.14</Text>
          <Text colorVariant="onBackgroundVariant">Last purchase 28d ago</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 18}}>
        <Button label="Sell" onPress={() => {}} style={{flex: 1}} />
        <Button
          label="Retire Credits"
          onPress={() => {}}
          variant="secondary"
          style={{flex: 1, marginLeft: 10}}
        />
      </View>

      <Text colorVariant="onBackgroundVariant" style={{marginTop: 15}}>
        You’ve previously retired 28 credits of this asset
      </Text>

      <View
        style={{
          backgroundColor: '#F4F4F4',
          marginTop: 40,
          padding: 10,
          borderRadius: 4,
        }}>
        <Text colorVariant="onBackgroundVariant">
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order. The information provided is
          not investment advice, and should not be used as a recommendation to
          buy or sell assets.
        </Text>
      </View>

      <Button label="Buy" onPress={() => {}} style={{marginTop: 30}} />
    </View>
  );
}
