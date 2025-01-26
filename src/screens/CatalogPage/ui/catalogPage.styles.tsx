import styled from 'styled-components';
import { Modal } from 'antd';
import { motion } from 'framer-motion';

export const SModal = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  pointer-events: all;
  height: 100dvh;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SMotion = styled(motion.div).attrs({
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
  transition: { duration: 0.35 },
})``;
