import styled from 'styled-components';
import { Skeleton } from 'antd';

export const SSkeletonFeedCard = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  padding: 64px 16px;
`;

export const SSkeletonTitle = styled(Skeleton).attrs({
  active: true,
  title: false,
})``;

export const SSkeletonImage = styled(Skeleton.Image).attrs({
  active: true,
})`
  &.ant-skeleton.ant-skeleton-active .ant-skeleton-image {
    width: 100%;
    height: 300px;
  }
`;
