import React from 'react';

import { useGenderStore } from '@/entities/gender';
import { useToGender } from '@/entities/gender/lib/useToGender';

import { SGender, SSex } from './genderSwitch.styles';

const GenderSwitch = () => {
  const { gender } = useGenderStore();
  const toGender = useToGender();

  const isMenSelected = gender === 'men';
  const isWomenSelected = gender === 'women';

  return (
    <SGender>
      <li>
        <SSex onClick={() => toGender('men')} $selected={isMenSelected}>
          мужчинам
        </SSex>
      </li>
      <li>
        <SSex onClick={() => toGender('women')} $selected={isWomenSelected}>
          женщинам
        </SSex>
      </li>
    </SGender>
  );
};

export default GenderSwitch;
