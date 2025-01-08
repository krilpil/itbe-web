import styled from 'styled-components';
import { Modal } from 'antd';

export const SCatalog = styled(Modal).attrs({
  width: '100%',
  height: '100vh',
  style: {
    top: 0,
    maxWidth: '100%',
  },
})`
  //z-index: 100;
  //position: fixed;
  //width: 100%;
  //height: 100vh;
  //background: gray;
`;

export const SModal = styled.div`
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.white};
`;
