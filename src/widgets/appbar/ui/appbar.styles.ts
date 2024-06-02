import styled from 'styled-components';

export const SAppBar = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`;

export const SLogotype = styled.span`
  font-size: 24px;
  font-weight: 900;
`;

export const SContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 16px;
  color: #121212;
`;
