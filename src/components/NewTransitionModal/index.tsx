import Modal from 'react-modal'
import { useHandleModal } from '../../context/modalContext';
import { Container, TypeButtons, EntryButton, ExitButton } from './style';
import { Entries, Exits } from '../../assets';
import Image from 'next/image';
import { useState } from 'react';

export const NewTransitionModal = () => {
  const { isNewTransitionModalOpen, setIsNewTransitionModalOpen } = useHandleModal();
  const [isEntry, setIsEntry] = useState<boolean>(false);
  const [isExit, setIsExit] = useState<boolean>(false);

  const closeTransitionModal = () => {
    setIsNewTransitionModalOpen(false);
  }

  const onEntryClicks = () => {
    setIsEntry(true);
    setIsExit(false);
    console.log('entrou na entrada');
  };

  const onExitClicks = () => {
    setIsExit(true);
    setIsEntry(false);
    console.log('entrou na saida');
  };

  return (
    <Modal
      isOpen={isNewTransitionModalOpen}
      onRequestClose={closeTransitionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Nova transação</h2>
        <input placeholder='Descrição' />
        <input placeholder='Preço' />
        <input placeholder='Categoria' />
        <TypeButtons>
          <EntryButton onClick={onEntryClicks} isActive={isEntry}>
            <Image src={Entries} alt="entry" />
            Entrada
          </EntryButton>
          <ExitButton onClick={onExitClicks} isActive={isExit}>
            <Image src={Exits} alt="exit" />
            Saída
          </ExitButton>
        </TypeButtons>
        <button className='register'>Cadastrar</button>
      </Container>
    </Modal>
  )
}