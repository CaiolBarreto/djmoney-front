import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
	background-color: ${themes.colors.headerBackground};
`;

export const Content = styled.div`
	margin: 0 auto;
	max-width: 1120px;

	padding: 2.5em 1em 10em;
	display: flex;
	justify-content: space-between;

	button {
		background-color: ${themes.colors.green};
		border: none;
		color: ${themes.colors.white};
		font-weight: 700;
		padding: 0 1.5em;
		border-radius: 6px;
		transition: filter 0.2s;

		:hover {
			filter: brightness(1.2);
		}
	}
`