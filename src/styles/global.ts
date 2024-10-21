import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};;
  }

  body {
    background: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-900"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    line-height: 0;
    cursor: pointer;
  }

  p, span {
  color: ${({ theme }) => theme["gray-800"]};
  line-height: 1.5;
  }
`;