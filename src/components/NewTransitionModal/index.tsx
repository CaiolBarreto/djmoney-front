import Modal from 'react-modal'
import { useHandleModal } from '../../context/modalContext';
import { Container, TypeButtons, EntryButton, ExitButton } from './style';
import { Entries, Exits, CloseModalIcon } from '../../assets';
import Image from 'next/image';
import { useState } from 'react';
import { useTransition } from '../../context/transationsContext';
import axios from 'axios';

export const NewTransitionModal = () => {
  const { isNewTransitionModalOpen, setIsNewTransitionModalOpen } = useHandleModal();
  const { transitions, setTransitions } = useTransition();
  const [isEntry, setIsEntry] = useState<boolean>(false);
  const [isExit, setIsExit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const closeTransitionModal = () => {
    setIsNewTransitionModalOpen(false);
    setDescription('');
    setValue(0);
    setCategory('');
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

  const formatDate = () => {
    const date = new Date();
    return [
      date.getDate().toString().padStart(2, '0'),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      date.getFullYear()
    ].join('/')
  }

  const createTransition = async () => {
    const transitionType = isEntry ? 'entry' : 'exit';
    const nowDate = formatDate();
    const response = await axios.post('http://localhost:3001/transition', {
        type: transitionType,
        title: description,
        value: value,
        category: category,
        date: nowDate
      });
    setTransitions([response.data.data, ...transitions]);
    closeTransitionModal();
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
        <h2>New transaction</h2>
        <input
          placeholder='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type='number'
          placeholder='Price'
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <input
          placeholder='Category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <TypeButtons>
          <EntryButton onClick={onEntryClicks} isActive={isEntry}>
            <Image src={Entries} alt="entry" />
            Deposit
          </EntryButton>
          <ExitButton onClick={onExitClicks} isActive={isExit}>
            <Image src={Exits} alt="exit" />
            Withdraw
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