import { create } from 'zustand';

import { ITabStore } from '../model/tabStore.types';

export const useTabStore = create<ITabStore>((set) => ({
  isOpenCatalog: false,

  section: null,
  category: null,
  subcategory: null,

  setSection: (section) => set({ section, category: null, subcategory: null }),
  setCategory: (category) => set({ category, subcategory: null }),
  setSubcategory: (subcategory) => set({ subcategory }),
  destroy: () => set({ section: null, category: null, subcategory: null }),
}));
