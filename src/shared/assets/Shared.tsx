import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const SharedIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faShare} {...props} />
);
