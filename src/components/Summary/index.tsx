import { Container, Card, Infos } from './style';
import { Entries, Exits, DollarSign } from '../../assets';
import Image from 'next/image'

export const Summary = () => (
	<Container>
		<Card>
			<Infos>
				<p>Entradas</p>
				<Image src={Entries} alt="entries" />
			</Infos>
			<h3>R$ 17.400,00</h3>
		</Card>
		<Card>
			<Infos>
				<p>Saídas</p>
				<Image src={Exits} alt="exits" />
			</Infos>
			<h3>R$ 1.259,00</h3>
		</Card>
		<Card>
			<Infos className='amount'>
				<p>Total</p>
				<Image src={DollarSign} alt="dollar sign" />
			</Infos>
			<h3>R$ 16.141,00</h3>
		</Card>
	</Container>
)
