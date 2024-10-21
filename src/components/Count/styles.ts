import styled from "styled-components";

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  background: ${({ theme }) => theme["gray-400"]};
  gap: 5px;

  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme["purple-500"]};

    &:hover{
      color: ${({ theme }) => theme["purple-900"]};
      transition: all 0.2s;
      cursor: pointer;
    }
  }
`