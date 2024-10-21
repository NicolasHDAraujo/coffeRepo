import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  height: 310px;

  img {
    width: 120px;
    height: 120px;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["gray-600"]};
    text-align: center;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme["gray-700"]};
`
export const Tags = styled.footer`
    display: flex;
    gap: 10px;
    span {
      background-color: ${({ theme }) => theme["yellow-100"]};
      color: ${({ theme }) => theme["yellow-900"]};
      font-size: 0.85rem;
      padding: 0.25rem 0.5rem;
      border-radius: 10px;
    }
`

export const ShoppingCartButton = styled.button`
  background: ${({ theme }) => theme["purple-900"]};
  color: ${({ theme }) => theme["gray-200"]};

  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  box-shadow: none;
  border: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`