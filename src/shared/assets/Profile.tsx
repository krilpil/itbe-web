import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const ProfileIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faUser} {...props} />
);
