import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { SButtonProps } from '@/entities/category';

export const SList = styled.ul`
  width: max-content;
  font-size: 20px;
  font-weight: 600;
`;

export const SButton = styled(Button).attrs<SButtonProps>(({ $tree }) => ({
  type: 'text',
  block: true,
  icon: $tree ? <FontAwesomeIcon size={'2xs'} icon={faChevronRight} /> : <span />,
  iconPosition: 'end',
}))<SButtonProps>`
  ${({ $selected }) =>
    !!$selected &&
    css`
      ul:has(&) .ant-btn {
        color: ${({ theme }) => theme.colors.gray};
      }

      &.ant-btn.ant-btn-text {
        color: ${({ theme }) => theme.colors.black};
      }
    `};

  &.ant-btn {
    height: auto;
    justify-content: space-between;
    gap: 32px;
    font-size: 20px;
    font-weight: 600;
    padding: 8px 16px;
  }
`;
