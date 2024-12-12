import { create } from 'zustand';

import { IGenderStore } from '../model/genderStore.types';

export const useGenderStore = create<IGenderStore>((set) => ({
  gender: 'men',
  setGender: (gender) => set({ gender }),
}));
