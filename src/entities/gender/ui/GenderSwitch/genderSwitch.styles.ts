import styled from 'styled-components';
import { Button } from 'antd';

import { SGenderSwitchProps } from '../../model/genderSwitch.types';

export const SGender = styled.ul`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SSex = styled(Button).attrs({
  type: 'text',
})<SGenderSwitchProps>`
  &.ant-btn-variant-text:not(:disabled):not(.ant-btn-disabled) {
    padding: 4px;
    color: ${({ $selected, theme }) => ($selected ? theme.colors.white : theme.colors.gray)};
    font-weight: 500;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
