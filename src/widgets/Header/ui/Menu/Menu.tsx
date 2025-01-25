'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SButton, SMenu, SNavigation } from './menu.styles';

const Menu = () => {
  return (
    <SMenu>
      <SNavigation>
        <Image src={'/logotype.png'} alt={'logotype'} width={75} height={75} />
        <ul>
          <li>
            <Link href={'/clothes'} passHref>
              <SButton type={'text'}>одежда</SButton>
            </Link>
          </li>
          <li>
            <Link href={'/'} passHref>
              <SButton type={'text'}>обувь</SButton>
            </Link>
          </li>
          <li>
            <Link href={'/'} passHref>
              <SButton type={'text'}>аксессуары</SButton>
            </Link>
          </li>
          <li>
            <Link href={'/'} passHref>
              <SButton type={'text'}>сумки</SButton>
            </Link>
          </li>
          <li>
            <Link href={'/'} passHref>
              <SButton type={'text'}>украшения</SButton>
            </Link>
          </li>
          <li>
            <Link href={'/'} passHref>
              <SButton type={'text'}>косметика</SButton>
            </Link>
          </li>
          <li>
            <Link href={'/'} passHref>
              <SButton type={'text'}>бренды</SButton>
            </Link>
          </li>
        </ul>
      </SNavigation>
    </SMenu>
  );
};

export default Menu;
