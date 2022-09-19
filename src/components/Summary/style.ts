import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
	max-width: 1120px;
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
	margin-top: -5em;
`;

export const Card = styled.div`
	width: 22em;
	height: 10em;
	border-radius: 6px;
	padding: 1.5em 1.5em 1.5em 2em;
	background-color: ${themes.colors.grey};

	h3 {
		color: ${themes.colors.veryLightGrey};
		font-size: 2em;
	}

	:nth-child(3) {
		background-color: ${themes.colors.amountGreen};
	}
`;

export const Infos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${themes.colors.textGrey};
	margin-bottom: 1.5em;
`;