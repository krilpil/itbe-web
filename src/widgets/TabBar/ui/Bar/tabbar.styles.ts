import styled from 'styled-components';
import { Button, Segmented } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISTabButton } from '../../model/bar.types';
import { TabType } from '../../model/tabBarStore.types';

export const SWrapper = styled.div`
  z-index: 1050;
  position: sticky;
  bottom: 32px;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  justify-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}) {
    bottom: 16px;
  }
`;

export const SSegmented = styled(Segmented<TabType>)`
  &.ant-segmented {
    padding: 8px;
    margin: 8px;
    background-color: rgba(100, 100, 100, 0.6);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 32px;

    & .ant-segmented-group {
      gap: 8px;

      & .ant-segmented-thumb {
        border-radius: 32px;
        background: rgba(0, 0, 0, 0.4);
      }

      & .ant-segmented-item {
        border-radius: 32px;

        &:hover {
          background: rgba(0, 0, 0, 0.08);
        }

        &:active {
          background: rgba(0, 0, 0, 0.12);
        }

        &.ant-segmented-item-selected {
          background-color: ${({ theme }) => theme.colors.black};

          & .ant-segmented-item-icon {
            color: ${({ theme }) => theme.colors.white};
          }
        }

        & .ant-segmented-item-label {
          padding: 8px 36px;
        }
      }
    }
  }
`;

export const SFontAwesomeIcon = styled(FontAwesomeIcon).attrs({
  size: 'xl',
})``;
