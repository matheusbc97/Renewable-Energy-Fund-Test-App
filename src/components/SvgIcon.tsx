import {SvgXml} from 'react-native-svg';
import {ARROW_LEFT_ICON} from '../../assets/icons/arrow-left-icon';

import {HOME_ICON} from '../../assets/icons/home-icon';
import {PORTFOLIO_ICON} from '../../assets/icons/portfolio-icon';
import {PROFILE_ICON} from '../../assets/icons/profile-icon';
import {TRADE_ICON} from '../../assets/icons/trade-icon';

export type SvgIconName =
  | 'Home'
  | 'Trade'
  | 'Portfolio'
  | 'ArrowLeft'
  | 'Profile';

export interface SvgIconProps {
  color?: string;
  size?: number;
  name: SvgIconName;
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
  }
}

export function SvgIcon({name, color}: SvgIconProps) {
  return <SvgXml xml={getSvgIcon(name)} fill={color} />;
}
