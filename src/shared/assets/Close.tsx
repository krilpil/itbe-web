import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { IFontAwesomeIcon } from '@/shared/model';

export const CloseIcon: FC<IFontAwesomeIcon> = (props) => (
  <FontAwesomeIcon icon={faClose} {...props} />
);
