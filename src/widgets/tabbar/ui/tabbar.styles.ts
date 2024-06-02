import styled from 'styled-components';

export const STabBar = styled.div`
  z-index: 10;
  position: fixed;
  display: grid;
  grid-auto-flow: column;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: #121212;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
`;
