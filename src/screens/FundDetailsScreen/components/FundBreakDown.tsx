import {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import {Text, TextLink} from '../../../components';
import {COLORS} from '../../../constants/colors';

const FundBreakdownSectionTitle = styled(Text)``;

const Container = styled.View`
  margin-top: 50px;
`;

const Title = styled(Text)`
  padding-horizontal: 20px;
`;

const LabelsScrollView = styled.ScrollView`
  margin-top: 20px;
  margin-horizontal: 10px;
`;

const FundBreakdownFlatList = styled(FlatList)`
  margin-top: 20px;
  margin-horizontal: 10px;
`;

const ReadMoreTextLink = styled(TextLink)`
  padding-bottom: 23px;
  padding-horizontal: 10px;
`;

const FundBreakdownListItemContainer = styled.View`
  margin-horizontal: 10px;
  border-width: 1px;
  border-color: ${COLORS.border};
  border-radius: 3px;
  height: 280px;
  width: 220px;
`;

const FundBreakdownListItemContent = styled.View`
  padding: 10px;
  flex: 1;
`;

const FundBreakdownListItemDescriptionText = styled(Text)`
  margin-top: 10px;
`;

const fundBreakdownSectionTitles = [
  'Highlighted',
  'Value',
  'Vintage',
  'Registry',
];

export default function FundBreakDown() {
  const [labelSelectedIndex, setLabelSelectedIndex] = useState(0);

  return (
    <Container>
      <Title variant="title" colorVariant="onBackground">
        Fund Breakdown
      </Title>

      <LabelsScrollView horizontal>
        {fundBreakdownSectionTitles.map((title, index) => {
          const isSelected = index === labelSelectedIndex;

          return (
            <TouchableOpacity
              onPress={() => setLabelSelectedIndex(index)}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: isSelected ? COLORS.primary : 'transparent',
                paddingBottom: 5,
                marginHorizontal: 10,
              }}>
              <FundBreakdownSectionTitle
                key={title}
                colorVariant={
                  isSelected ? 'onBackground' : 'onBackgroundVariant'
                }>
                {title}
              </FundBreakdownSectionTitle>
            </TouchableOpacity>
          );
        })}
      </LabelsScrollView>

      <FundBreakdownFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        horizontal
        renderItem={({item}) => (
          <FundBreakdownListItemContainer>
            <View style={{height: 100}} />

            <FundBreakdownListItemContent>
              <Text>AspiraDAC</Text>
              <FundBreakdownListItemDescriptionText>
                Aspira is building a modular, direct air capture system with the
                energy supply integrated into the modules. Read more
              </FundBreakdownListItemDescriptionText>
            </FundBreakdownListItemContent>

            <ReadMoreTextLink onPress={() => {}}>Read More</ReadMoreTextLink>
          </FundBreakdownListItemContainer>
        )}
      />
    </Container>
  );
}
