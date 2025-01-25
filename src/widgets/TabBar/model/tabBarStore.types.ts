export type TabType = 'home' | 'open_catalog' | 'close_catalog' | 'favourites' | 'profile' | null;

export interface ITabBarStore {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}
