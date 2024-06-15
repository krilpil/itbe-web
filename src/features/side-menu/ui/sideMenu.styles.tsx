import styled from 'styled-components';
import { Button, Collapse, Drawer, Tabs } from 'antd';

import { CloseIcon } from '@/shared/assets';

export const SSideMenu = styled(Drawer).attrs({
  destroyOnClose: true,
  placement: 'left',
  height: '100%',
  width: '100%',
  closeIcon: <CloseIcon size={'xl'} />,
})`
  & .ant-drawer-header {
    padding: 0;
    border-bottom: none;

    & .ant-drawer-header-title {
      flex-direction: row-reverse;

      & .ant-drawer-title {
        //display: flex;
        //align-items: end;
        //text-align: center;
      }

      & .ant-drawer-close {
        position: absolute;
        z-index: 10;
        height: auto;
        width: auto;
        padding: 2px 4px;
        right: 12px;
        color: inherit;
        margin-inline-end: 0;
      }
    }
  }

  & .ant-drawer-body {
    padding: 16px;
  }
`;

export const STabs = styled(Tabs).attrs({
  type: 'card',
})`
  user-select: none;

  &.ant-tabs > .ant-tabs-nav {
    margin: 0;

    & .ant-tabs-nav-wrap {
      margin: 16px 16px 0;

      & .ant-tabs-tab {
        font-weight: 400;
        padding: 10px 24px;
        font-size: 16px;
      }
    }
  }
`;

export const SCollapse = styled(Collapse).attrs({
  ghost: true,
  expandIconPosition: 'end',
})`
  user-select: none;

  & .ant-collapse-item {
    & .ant-collapse-header {
      align-items: center;
      padding: 24px 0;

      & .ant-collapse-header-text {
        font-size: 16px;
        font-weight: 300;

        &:first-letter {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }

    & .ant-collapse-content > .ant-collapse-content-box {
      display: grid;
      justify-items: left;
      padding-block: 0;
      padding: 0;
    }
  }
`;

export const SMenuButton = styled(Button).attrs({
  type: 'link',
})`
  font-size: 16px;
  font-weight: 300;
  padding: 16px;
  height: auto;

  & span:first-letter {
    text-transform: uppercase;
  }
`;
