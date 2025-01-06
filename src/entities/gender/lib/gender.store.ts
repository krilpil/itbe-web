import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { IGenderStore } from '../model/genderStore.types';

export const useGenderStore = create(
  persist<IGenderStore>(
    (set, get, store) => ({
      gender: 'men',
      setGender: (gender) => set({ gender }),
      ...store,
    }),
    {
      name: 'gender',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
