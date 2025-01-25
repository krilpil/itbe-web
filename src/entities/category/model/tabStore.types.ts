export type TabType = string | null;

export interface ITabStore {
  section: TabType;
  category: TabType;
  subcategory: TabType;

  setSection: (section: TabType) => void;
  setCategory: (category: TabType) => void;
  setSubcategory: (subcategory: TabType) => void;
  destroy: () => void;
}
