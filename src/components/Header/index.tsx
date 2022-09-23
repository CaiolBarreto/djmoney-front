import { Container, Content } from './style';
import { Logo } from '../../assets';
import Image from 'next/image';
import { useHandleModal } from '../../context/modalContext';

export const Header = () => {
  const { setIsNewTransitionModalOpen } = useHandleModal();

  const openTransitionModal = () => {
    setIsNewTransitionModalOpen(true);
  }

  return (
    <Container>
      <Content>
        <Image src={Logo} alt="logo" />
        <button
          type="button"
          onClick={openTransitionModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
};