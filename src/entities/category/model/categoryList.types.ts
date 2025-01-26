import { IList } from './list.types';
import { TabType } from '../model/tabStore.types';

export interface CategoryListProps {
  list: IList[];
  activeId: TabType;
  onEnter: (id: string) => void;
  onSelect: (href: string) => void;
}

export interface SButtonProps {
  $selected: boolean;
  $tree: boolean;
}
