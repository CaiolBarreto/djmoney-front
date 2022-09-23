import { GlobalStyle } from "../styles/global";
import { Header, Summary, Table, NewTransitionModal } from '../components';
import { ModalProvider } from "../context/modalContext";
import { TransitionProvider } from "../context/transationsContext";

const Home = () => {
  return (
    <TransitionProvider>
      <ModalProvider>
        <NewTransitionModal />
        <Header />
        <Summary />
        <Table />
        <GlobalStyle />
      </ModalProvider>
    </TransitionProvider>
  )
}

export default Home;

