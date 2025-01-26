export type TabType = 'home' | 'catalog' | 'favourites' | 'profile' | null;

export interface ITabBarStore {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}
