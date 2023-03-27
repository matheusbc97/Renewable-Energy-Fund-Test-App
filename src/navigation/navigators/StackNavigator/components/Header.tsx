import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import {SvgIcon} from '../../../../components';
import {COLORS} from '../../../../constants/colors';

interface IHeaderContainerProps {
  insetsTop: number;
}

const HeaderContainer = styled.View<IHeaderContainerProps>`
  padding-top: ${({insetsTop}) => insetsTop}px;
  padding-horizontal: 25px;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.background};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.border};
  height: ${({insetsTop}) => 60 + insetsTop}px;
`;

const BackContainer = styled.View`
  flex: 1;
`;

const CenterContainer = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: ${COLORS.onBackgroundVariant};
`;

function Header({options, navigation, back}: NativeStackHeaderProps) {
  const insetsTop = useSafeAreaInsets().top;
  return (
    <HeaderContainer insetsTop={insetsTop}>
      {back && (
        <BackContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgIcon name="ArrowLeft" color={COLORS.onBackground} />
          </TouchableOpacity>
        </BackContainer>
      )}
      <CenterContainer>
        <Title>{options.title}</Title>
        <Subtitle>{options.subtitle}</Subtitle>
      </CenterContainer>
      <View style={{flex: 1}} />
    </HeaderContainer>
  );
}

export default Header;
