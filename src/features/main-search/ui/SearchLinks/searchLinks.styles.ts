import styled from 'styled-components';
import Link from 'next/link';

export const SSearchLinks = styled.div`
  display: grid;
  grid-gap: 16px;
`;

export const SSearchTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const SSearchResult = styled.div`
  display: grid;
`;

export const SLink = styled(Link)`
  display: inline-block;
  padding: 12px 0;
  color: inherit;
  font-weight: 300;

  &::first-letter {
    font-weight: 600;
  }
`;
