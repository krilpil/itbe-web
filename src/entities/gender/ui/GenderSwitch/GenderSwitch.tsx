import React from 'react';

import { useGenderStore } from '@/entities/gender';

import { SGender, SSex } from './genderSwitch.styles';

const GenderSwitch = () => {
  const { gender, setGender } = useGenderStore();

  const isMenSelected = gender === 'men';
  const isWomenSelected = gender === 'women';

  return (
    <SGender>
      <li>
        <SSex onClick={() => setGender('men')} $selected={isMenSelected}>
          мужчинам
        </SSex>
      </li>
      <li>
        <SSex onClick={() => setGender('women')} $selected={isWomenSelected}>
          женщинам
        </SSex>
      </li>
    </SGender>
  );
};

export default GenderSwitch;
