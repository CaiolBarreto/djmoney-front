import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  margin: 4rem auto 0 auto;
  max-width: 1120px;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: ${themes.colors.textGrey};
    margin-bottom: 3.5rem;
  }

  th {
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background-color: ${themes.colors.lineGrey};
    border-radius: 5px;
  }

  tr {
    .entry {
      color: ${themes.colors.lightGreen};
    }
    .exit {
      color: ${themes.colors.red};
    }
  }
`;


export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3rem;

  textarea {
    width: 100%;
    border: 0;
    resize: none;
    border-radius: 6px;
    padding: 1rem 1rem 0 1rem;
    background-color: ${themes.colors.headerBackground};
    color: ${themes.colors.textGrey};
    transition: ease .2s;

    :focus {
      box-shadow: 0 0 0 2px ${themes.colors.lightGreen};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 9.5rem;
    border-radius: 6px;
    margin-left: 1rem;
    background: transparent;
    border: solid 2px ${themes.colors.lightGreen};
    color: ${themes.colors.lightGreen};
    transition: ease .3s;
    font-weight: 700;

    svg {
      width: 20px;
    }
  }

  button:hover {
    background-color: ${themes.colors.lightGreen};
    color: ${themes.colors.white};
  }
`;