import {FlatList, ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import {Text, TextLink} from '../../../components';
import {COLORS} from '../../../constants/colors';

const FundBreakdownSectionTitle = styled(Text)`
  flex-direction: row;
  margin-horizontal: 10px;
`;

export default function FundBreakDown() {
  return (
    <View style={{marginTop: 50}}>
      <Text
        variant="title-big"
        colorVariant="onBackgroundVariant"
        style={{paddingHorizontal: 20}}>
        Fund Breakdown
      </Text>

      <ScrollView
        horizontal
        style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 10}}>
        <FundBreakdownSectionTitle>Highlighted</FundBreakdownSectionTitle>
        <FundBreakdownSectionTitle>Value</FundBreakdownSectionTitle>
        <FundBreakdownSectionTitle>Vintage</FundBreakdownSectionTitle>
        <FundBreakdownSectionTitle>Registry</FundBreakdownSectionTitle>
      </ScrollView>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        horizontal
        style={{marginTop: 20, marginHorizontal: 10}}
        renderItem={({item}) => (
          <View
            style={{
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: COLORS.border,
              borderRadius: 3,
              height: 280,
              width: 220,
            }}>
            <View style={{height: 100}} />

            <View style={{padding: 10, flex: 1}}>
              <Text>AspiraDAC</Text>
              <Text style={{marginTop: 10}}>
                Aspira is building a modular, direct air capture system with the
                energy supply integrated into the modules. Read more
              </Text>
            </View>

            <TextLink
              style={{paddingBottom: 23, paddingHorizontal: 10}}
              onPress={() => {}}>
              Read More
            </TextLink>
          </View>
        )}
      />
    </View>
  );
}
