import styled from 'styled-components';

export const SBlackLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const SWrapper = styled.div`
  padding: 8px 24px;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops};
`;
