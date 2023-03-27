import {View} from 'react-native';
import {
  Avatar,
  Button,
  HorizontalSeparator,
  SvgIcon,
  Text,
} from '../../../components';
import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';

const notificationSvg =
  '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15H20V17H0V15H2V8C2 5.87827 2.84285 3.84344 4.34315 2.34315C5.84344 0.842855 7.87827 0 10 0C12.1217 0 14.1566 0.842855 15.6569 2.34315C17.1571 3.84344 18 5.87827 18 8V15ZM16 15V8C16 6.4087 15.3679 4.88258 14.2426 3.75736C13.1174 2.63214 11.5913 2 10 2C8.4087 2 6.88258 2.63214 5.75736 3.75736C4.63214 4.88258 4 6.4087 4 8V15H16ZM7 19H13V21H7V19Z" fill="black"/></svg>';

const HomeHeaderTopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 22px;
  margin-top: 20px;
`;

const HomeHeaderBottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 22px;
  margin-top: 20px;
`;

const HomeHorizontalSeparator = styled(HorizontalSeparator)`
  margin-top: 30px;
`;

export default function HomeHeader() {
  return (
    <View>
      <HomeHeaderTopContainer>
        <Avatar />

        <Text variant="title-small">Account: $1,457.23</Text>

        <SvgXml xml={notificationSvg} width="20" height="21" />
      </HomeHeaderTopContainer>

      <HomeHeaderBottomContainer>
        <View style={{flex: 1}}>
          <Text>Portfolio</Text>
          <Text variant="title-big">$1,245. 23</Text>
        </View>

        <Button
          onPress={() => {}}
          variant="primary-variant"
          leftComponent={<SvgIcon name="Coin" style={{marginRight: 5}} />}
          label="Earn Rewards"
          style={{
            padding: 8,
          }}
        />
      </HomeHeaderBottomContainer>

      <HomeHorizontalSeparator />
    </View>
  );
}
