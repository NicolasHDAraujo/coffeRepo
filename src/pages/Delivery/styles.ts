import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export const OrderContainer = styled.div`
    max-width: 90rem;
    height: calc(100vh - 12rem);
    margin: 2.5rem 0;
    padding: 2.5rem 0;

  header {
    h3 {
      font-size: 2rem;
      font-family: 'Baloo 2', sans-serif;
    }

    p {
      font-size: 1.25rem;
    }
  }
`

export const Details = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const Gradient = styled.div`
  width: 50%;
  height: 270px;
  background: linear-gradient(to right, ${({ theme }) => theme["yellow-900"]}, ${({ theme }) => theme["purple-900"]});
  padding: 2px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
`

export const ItemsContainer = styled.div`
  background: white;
  height: 100%;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  gap: 1rem;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
`

interface BackgroundIcons {
  type: 'mapin' | 'timer' | 'dollar'
}

const backgroundColorMap = {
  dollar: (theme: DefaultTheme) => theme["yellow-900"],
  mapin: (theme: DefaultTheme) => theme["purple-900"],
  timer: (theme: DefaultTheme) => theme["yellow-500"],
};

export const Icon = styled.span<BackgroundIcons>`
  line-height: 0;
  padding: 0.5rem;
  background-color: ${props => backgroundColorMap[props.type](props.theme)};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
`;