import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const ArrowRightIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faArrowRight} {...props} />
);
