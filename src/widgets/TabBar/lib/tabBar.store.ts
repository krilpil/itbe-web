import { create } from 'zustand';

import { ITabBarStore } from '../model/tabBarStore.types';

export const useTabBarStore = create<ITabBarStore>((set, get) => ({
  activeTab: null,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
