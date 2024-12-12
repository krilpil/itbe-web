'use client';

import React from 'react';

import { GenderSwitch } from '@/entities/gender';

import { SBlackLine, SWrapper } from './blackLine.styles';

const BlackLine = () => {
  return (
    <SBlackLine>
      <SWrapper>
        <GenderSwitch />
      </SWrapper>
    </SBlackLine>
  );
};

export default BlackLine;
