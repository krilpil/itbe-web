import styled from 'styled-components';
import { Button } from 'antd';

export const SMenu = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const SNavigation = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 4px 24px;
  width: ${({ theme }) => theme.breakpoints.maxDesktops};

  & > ul {
    display: flex;
    gap: 16px;
  }
`;

export const SButton = styled(Button).attrs({
  type: 'text',
})`
  &.ant-btn {
    font-size: 18px;
  }
`;
