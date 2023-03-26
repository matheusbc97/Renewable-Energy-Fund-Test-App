import styled from 'styled-components/native';

import {COLORS} from '../constants/colors';
import {SvgIcon} from './SvgIcon';

const AvatarContainer = styled.View`
  background-color: ${COLORS.info};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export function Avatar() {
  return (
    <AvatarContainer>
      <SvgIcon name="Profile" />
    </AvatarContainer>
  );
}
