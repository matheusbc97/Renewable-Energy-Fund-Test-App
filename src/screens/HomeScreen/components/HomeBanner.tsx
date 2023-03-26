import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';

import {COLORS} from '../../../constants/colors';
import {Text} from '../../../components';
import {BusinessStatics} from '../../../../assets/icons/business-statistics';

const HomeBannerContainer = styled.View`
  background-color: ${COLORS.primary};
  margin-horizontal: 20px;
  margin-top: 20px;
  border-radius: 10px;
  flex-direction: row;
  padding-horizontal: 20px;
  align-items: center;
`;

const BannerLeftContainer = styled.View`
  flex: 1;
  padding-vertical: 20px;
`;

const Description = styled(Text)`
  margin-top: 10px;
`;

const BannerRightContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export default function HomeBanner() {
  return (
    <HomeBannerContainer>
      <BannerLeftContainer>
        <Text colorVariant="onSecondary" variant="title">
          Learn more about carbon credits
        </Text>
        <Description variant="text-small" colorVariant="onSecondary">
          Check out our top tips
        </Description>
      </BannerLeftContainer>

      <BannerRightContainer>
        <SvgXml xml={BusinessStatics} />
      </BannerRightContainer>
    </HomeBannerContainer>
  );
}
