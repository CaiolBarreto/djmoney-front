import { Container, Card, Infos } from './style';
import { Entries, Exits, DollarSign } from '../../assets';
import Image from 'next/image'
import { useTransition } from '../../context/transationsContext';

export const Summary = () => {
	const { transitions } = useTransition();

	const summary = transitions.reduce((acc, transition) => {
		if (transition.type === 'entry') {
			acc.entries += transition.value;
			acc.total += transition.value;
		} else {
			acc.exits += transition.value;
			acc.total -= transition.value;
		}

		return acc;
	}, {
		entries: 0,
		exits: 0,
		total: 0
	})

	return (
		<Container>
			<Card>
				<Infos>
					<p>Entradas</p>
					<Image src={Entries} alt="entries" />
				</Infos>
				<h3>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.entries)}
				</h3>
			</Card>
			<Card>
				<Infos>
					<p>Saídas</p>
					<Image src={Exits} alt="exits" />
				</Infos>
				<h3>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.exits)}
				</h3>
			</Card>
			<Card>
				<Infos className='amount'>
					<p>Total</p>
					<Image src={DollarSign} alt="dollar sign" />
				</Infos>
				<h3>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.total)}
				</h3>
			</Card>
		</Container>
	)
}
