import Modal from 'react-modal'
import { useHandleModal } from '../../context/modalContext';
import { Container, TypeButtons, EntryButton, ExitButton } from './style';
import { Entries, Exits, CloseModalIcon } from '../../assets';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { useTransition } from '../../context/transationsContext';

export const NewTransitionModal = () => {
  const { isNewTransitionModalOpen, setIsNewTransitionModalOpen } = useHandleModal();
  const { setTransitions } = useTransition();
  const [isEntry, setIsEntry] = useState<boolean>(false);
  const [isExit, setIsExit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>('');


  const closeTransitionModal = () => {
    setIsNewTransitionModalOpen(false);
    setIsEntry(false);
    setIsExit(false);
  }

  const onEntryClicks = () => {
    setIsEntry(true);
    setIsExit(false);
  };

  const onExitClicks = () => {
    setIsExit(true);
    setIsEntry(false);
  };

  const createTransition = async () => {
    const transitionType = isEntry ? 'entry' : 'exit';
    const nowDate = new Date();
    const response = await axios.post('http://localhost:3001/transition', {
      type: transitionType,
      title: description,
      value: value,
      cateogry: category,
      date: nowDate
    });
    const { data } = response.data;
    setTransitions(data);
  }

  return (
    <Modal
      isOpen={isNewTransitionModalOpen}
      onRequestClose={closeTransitionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={closeTransitionModal}
        className="react-modal-close"
      >
        <Image src={CloseModalIcon} alt="close-modal" className='close' />
      </button>
      <Container>
        <h2>Nova transação</h2>
        <input
          placeholder='Descrição'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type='number'
          placeholder='Preço'
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
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
        <button
          className='register'
          onClick={createTransition}
        >
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}