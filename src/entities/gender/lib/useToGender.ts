'use client';

import { useRouter } from 'next/navigation';

import { useGenderStore } from '@/entities/gender';

import { GenderType } from '../model/genderStore.types';

type IToGender = (gender: GenderType) => void;

export const useToGender = (): IToGender => {
  const router = useRouter();
  const { setGender } = useGenderStore();

  return (gender) => {
    setGender(gender);
    router.push(`/${gender}`);
  };
};
