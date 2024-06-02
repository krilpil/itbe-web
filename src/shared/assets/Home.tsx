import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const HomeIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faHome} {...props} />
);
