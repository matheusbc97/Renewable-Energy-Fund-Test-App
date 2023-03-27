import {StyleProp, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {ARROW_LEFT_ICON} from '../../assets/icons/arrow-left-icon';
import {COIN_ICON} from '../../assets/icons/coin-icon';
import {DOWN_RIGHT_ARROW_ICON} from '../../assets/icons/down-right-arrow';
import {HOME_ICON} from '../../assets/icons/home-icon';
import {INFO_ICON} from '../../assets/icons/info-icon';
import {PORTFOLIO_ICON} from '../../assets/icons/portfolio-icon';
import {PROFILE_ICON} from '../../assets/icons/profile-icon';
import {TRADE_ICON} from '../../assets/icons/trade-icon';
import {UP_RIGHT_ARROW_ICON} from '../../assets/icons/up-right-arrow';

export type SvgIconName =
  | 'Home'
  | 'Trade'
  | 'Portfolio'
  | 'ArrowLeft'
  | 'Profile'
  | 'Coin'
  | 'DownRightArrow'
  | 'UpRightArrow'
  | 'Info';

export interface SvgIconProps {
  color?: string;
  size?: number;
  name: SvgIconName;
  style?: StyleProp<ViewStyle>;
}

function getSvgIcon(routeName: SvgIconName) {
  switch (routeName) {
    case 'Home':
      return HOME_ICON;
    case 'Trade':
      return TRADE_ICON;
    case 'Portfolio':
      return PORTFOLIO_ICON;
    case 'ArrowLeft':
      return ARROW_LEFT_ICON;
    case 'Profile':
      return PROFILE_ICON;
    case 'Coin':
      return COIN_ICON;
    case 'DownRightArrow':
      return DOWN_RIGHT_ARROW_ICON;
    case 'UpRightArrow':
      return UP_RIGHT_ARROW_ICON;
    case 'Info':
      return INFO_ICON;
  }
}

export function SvgIcon({name, color, style}: SvgIconProps) {
  return <SvgXml xml={getSvgIcon(name)} fill={color} style={style} />;
}
