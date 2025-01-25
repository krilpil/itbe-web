import styled from 'styled-components';
import { Breadcrumb } from 'antd';

export const SFeedScreen = styled.main`
  display: flex;
  flex-direction: column;
  justify-self: center;
  grid-gap: 24px;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops};
  padding: 24px;
`;

export const STitle = styled.h1`
  font-weight: 900;
  font-size: 30px;
`;

export const SBread = styled(Breadcrumb)``;

export const SFeed = styled.section`
  display: grid;
  grid-gap: 96px;

  grid-template-columns: repeat(4, 4fr);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxOldDesktops}) {
    grid-gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 96px;
  }
`;
