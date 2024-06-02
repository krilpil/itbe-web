import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const BarsIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faBars} {...props} />
);
