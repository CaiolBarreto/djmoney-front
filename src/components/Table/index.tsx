import { useState } from 'react';
import { Container, Search } from './style';
import { format } from 'date-fns';
import { SearchIcon } from '../../assets';

type LineInfos = {
	type: string;
	title: string;
	value: number;
	category: string;
	date: Date;
}

export const Table = () => {
	const [infos, setInfos] = useState<LineInfos[]>([])

	const handleFormatValue = (value: number, type: string) => {
		if (type === 'entry') {
			return `R$ ${value}`
		} else {
			return `- R$ ${value}`
		}
	}

	const handleFormatDate = (date: Date) => {
		return format(date, 'dd/MM/yyyy')
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
						stroke-width="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
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
					{infos.map(line => {
						return (
							<tr>
								<td>{line.title}</td>
								<td className={line.type}>
									{handleFormatValue(line.value, line.type)}
								</td>
								<td>{line.category}</td>
								<td>{handleFormatDate(line.date)}</td>
							</tr>
						)
					})}
					<tr>
						<td>Desenvolvimento</td>
						<td>12000</td>
						<td>dev</td>
						<td>19/09/2022</td>
					</tr>
					<tr>
						<td>Desenvolvimento</td>
						<td>12000</td>
						<td>dev</td>
						<td>19/09/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}