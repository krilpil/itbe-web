import styled from 'styled-components';
import { Drawer } from 'antd';

import { CloseIcon } from '@/shared/assets';

export const SSideMenu = styled(Drawer).attrs({
  // destroyOnClose: true,
  // placement: 'left',
  // height: '100%',
  // width: '100%',
  // closeIcon: <CloseIcon size={'xl'} />,
})`
  //& .ant-drawer-header {
  //  padding: 16px;
  //
  //  & .ant-drawer-header-title {
  //    flex-direction: row-reverse;
  //
  //    & .ant-drawer-close {
  //      height: auto;
  //      width: auto;
  //      padding: 4px;
  //      color: inherit;
  //      margin-inline-end: 0;
  //    }
  //  }
  //}
`;
