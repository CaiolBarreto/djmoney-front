import styled from "styled-components";
import { themes } from "../../styles/theme";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  h2 {
    color: ${themes.colors.veryLightGrey};
  }

  input {
    border: 0;
    height: 3rem;
    padding-left: 1rem;
    border-radius: 6px;
    background-color: ${themes.colors.headerBackground};
    color: ${themes.colors.textGrey};
    transition: ease .2s;

    :focus {
      box-shadow: 0 0 0 2px ${themes.colors.lightGreen};
    }
  }

  .register {
    background-color: ${themes.colors.green};
    padding: 1.2rem;
    border: 0;
    border-radius: 6px;
    color: ${themes.colors.white};
    font-weight: 700;
    font-size: 1rem;
    transition: ease .2s;

    :hover {
      filter: brightness(1.2);
    }
  }

  .close {
    justify-content: right;
    background-color: red;
    width: 30%;
  }
`;

export const TypeButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    width: 14.2rem;
    padding: .8rem .5rem;
    font-size: 1rem;
    color: ${themes.colors.textGrey};
    border-radius: 6px;
    transition: ease .2s;

    :hover {
      filter: brightness(1.1);
    }
  }
`;

interface EntryButtonProps {
  isActive: boolean;
}

interface ExitButtonProps {
  isActive: boolean;
}

export const EntryButton = styled.button<EntryButtonProps>`
  background-color: ${(props) => props.isActive ? transparentize(0.7, `${themes.colors.green}`) : `${themes.colors.lineGrey}`};
`;

export const ExitButton = styled.button<ExitButtonProps>`
  background-color: ${(props) => props.isActive ? transparentize(0.7, `${themes.colors.red}`)  : `${themes.colors.lineGrey}`};
`;