import {View, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {Text} from '../../../components';
import styled from 'styled-components/native';

interface IHomeOptionProps {
  style?: StyleProp<ViewStyle>;
}
const OptionContainer = styled.View`
  background-color: ${COLORS.info};
  height: 215px;
  flex: 1;
  padding-horizontal: 10px;
  padding-top: 20px;
  border-radius: 10px;
`;

function HomeOption({style}: IHomeOptionProps) {
  return (
    <OptionContainer style={style}>
      <Text>Why should you invest here?</Text>
    </OptionContainer>
  );
}

export default function HomeOptions() {
  return (
    <View style={{padding: 20, flexDirection: 'row'}}>
      <HomeOption />
      <HomeOption style={{marginLeft: 15}} />
    </View>
  );
}
