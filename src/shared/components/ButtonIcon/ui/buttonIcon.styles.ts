import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonIcon = styled(Button).attrs({
  type: 'text',
})`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;
