'use client';

import React from 'react';
import Image from 'next/image';

import { SMenu, SNavigation } from './menu.styles';

const Menu = () => {
  return (
    <SMenu>
      <SNavigation>
        <Image src={'/logotype.png'} alt={'logotype'} width={75} height={75} />
        <ul>
          <li>одежда</li>
          <li>обувь</li>
          <li>аксессуары</li>
          <li>сумки</li>
          <li>украшения</li>
          <li>косметика</li>
          <li>бренды</li>
        </ul>
      </SNavigation>
    </SMenu>
  );
};

export default Menu;
