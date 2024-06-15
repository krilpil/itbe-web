import { DrawerProps } from 'antd';
import { Tab } from 'rc-tabs/lib/interface';

export type SideMenuProps = Pick<DrawerProps, 'open' | 'onClose'>;

export type ITabSection = 'men' | 'women';

export interface ITabItems extends Tab {
  key: ITabSection;
}
