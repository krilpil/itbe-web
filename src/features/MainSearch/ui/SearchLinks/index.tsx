import React from 'react';

import {
  SLink,
  SSearchLinks,
  SSearchResult,
  SSearchTitle,
} from './searchLinks.styles';

const SearchLinks = () => {
  return (
    <SSearchLinks>
      <SSearchTitle>Недавние поиски</SSearchTitle>
      <SSearchResult>
        <SLink href={'/'}>Кроссовки</SLink>
        <SLink href={'/'}>Футболки</SLink>
        <SLink href={'/'}>Брюки</SLink>
      </SSearchResult>
    </SSearchLinks>
  );
};

export default SearchLinks;
