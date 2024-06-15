import React, { useState } from 'react';

import { ButtonIcon } from '@/shared/components';
import { BarsIcon, MagnifyingGlass } from '@/shared/assets';
import { MainSearch } from '@/features/main-search';
import { SideMenu } from '@/features/side-menu';

import { SAppBar, SContainer, SLogotype } from './appbar.styles';

const AppBar = () => {
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);

  const handleShowSearch = () => {
    setOpenSearch((state) => !state);
  };

  const handleShowSideMenu = () => {
    setOpenSideMenu((state) => !state);
  };

  return (
    <>
      <SAppBar>
        <SContainer>
          <ButtonIcon onClick={handleShowSideMenu}>
            <BarsIcon size={'xl'} />
          </ButtonIcon>
          <SLogotype>ITBE</SLogotype>
          <ButtonIcon onClick={handleShowSearch}>
            <MagnifyingGlass size={'xl'} />
          </ButtonIcon>
        </SContainer>
      </SAppBar>

      <MainSearch open={isOpenSearch} onClose={handleShowSearch} />
      <SideMenu open={isOpenSideMenu} onClose={handleShowSideMenu} />
    </>
  );
};

export default AppBar;
