import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Actions = styled.aside`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    display: flex;
    text-align: center;
    gap: 4px;
    color: ${({ theme }) => theme["purple-900"]};;

    svg {
      fill: ${({ theme }) => theme["purple-500"]};
    }
  }

  a {
    background: ${({ theme }) => theme["yellow-100"]};
    padding: 0.5rem;
    border-radius: 6px;
    
    svg {
      color: ${({ theme }) => theme['yellow-900']};

      &:hover {
        opacity: 0.8;
        transition: all 0.2s;
      }
    }

    span {
      font-weight: bold;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['yellow-900']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 3.5%;
      margin-left: 1.5%;
    }
  }
`