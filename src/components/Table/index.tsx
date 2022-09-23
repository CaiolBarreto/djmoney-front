import { useTransition } from '../../context/transationsContext';
import { Container, Search } from './style';

export const Table = () => {
	const { transitions } = useTransition();

	const handleFormatValue = (value: number, type: string) => {
		if (type === 'entry') {
			return `R$ ${value}`
		} else {
			return `- R$ ${value}`
		}
	}

	return (
		<Container>
			<Search>
				<textarea placeholder='Busque uma transação'></textarea>
				<button type='button'>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					<p>Buscar</p>
				</button>
			</Search>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{transitions?.map(line => {
						return (
							<tr key={line.id}>
								<td>{line.title}</td>
								<td className={line.type}>
									{handleFormatValue(line.value, line.type)}
								</td>
								<td>{line.category}</td>
								<td>{line.date}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</Container>
	)
}