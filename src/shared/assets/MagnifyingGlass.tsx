import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const MagnifyingGlass: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />
);
