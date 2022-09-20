import { GlobalStyle } from "../styles/global";
import { Header, Summary, Table, NewTransitionModal } from '../components';
import { ModalProvider } from "../context/modalContext";

const Home = () => {
  return (
    <ModalProvider>
      <NewTransitionModal />
      <Header />
      <Summary />
      <Table />
      <GlobalStyle />
    </ModalProvider>
  )
}

export default Home;

