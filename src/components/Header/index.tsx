import { Container, Content } from './style';
import { Logo } from '../../assets';
import Image from 'next/image'

export const Header = () => (
  <Container>
    <Content>
      <Image src={Logo} />
      <button type="button">
        Nova transação
      </button>
    </Content>
  </Container>
)