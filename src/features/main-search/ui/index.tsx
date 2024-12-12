import React, { FC } from 'react';

import { SMainSearch } from './mainSearch.styles';
import { MainSearchProps } from '../model/mainSearch.types';
import DrawerTitle from './DrawerTitile';
import SearchLinks from './SearchLinks';

const MainSearch: FC<MainSearchProps> = ({ open, onClose }) => {
  return (
    <SMainSearch open={open} onClose={onClose} title={<DrawerTitle />}>
      <SearchLinks />
    </SMainSearch>
  );
};

export default MainSearch;
