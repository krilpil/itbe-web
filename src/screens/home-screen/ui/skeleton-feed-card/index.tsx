import React from 'react';

import { SSkeletonFeedCard, SSkeletonImage, SSkeletonTitle } from './skeleton-feed-card.styles';

const SkeletonFeedCard = () => {
  return (
    <SSkeletonFeedCard>
      <SSkeletonTitle />
      <SSkeletonImage />
      <SSkeletonTitle />
    </SSkeletonFeedCard>
  );
};

export default SkeletonFeedCard;
