import { Container, Content } from './style';
import { Logo } from '../../assets';

export const Header = () => (
  <Container>
    <Content>
      <img src={Logo} alt="logo" />
      <button type="button">
        Nova transação
      </button>
    </Content>
  </Container>
)