import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const LikeIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faHeart} {...props} />
);
