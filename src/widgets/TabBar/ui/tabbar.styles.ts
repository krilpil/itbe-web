import styled from 'styled-components';

import { ButtonIcon } from '@/shared/components';

export const SWrapper = styled.div`
  z-index: 10;
  position: sticky;
  bottom: 32px;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}) {
    bottom: 16px;
  }
`;

export const STabBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 8px;
  margin: 8px;

  background-color: rgba(100, 100, 100, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 32px;
`;

export const STabButton = styled(ButtonIcon)`
  padding: 8px;
  border-radius: 32px;
  color: #f1f1f1;

  &:not(:disabled):not(.ant-btn-disabled) {
    color: #f1f1f1;

    &:hover {
      color: #f1f1f1;
      background: rgba(0, 0, 0, 0.08);
    }

    &:active {
      background: rgba(0, 0, 0, 0.12);
    }
  }
`;
