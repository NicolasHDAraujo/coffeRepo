import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Container = styled.div`

h3 {
  font-size: 1.2rem;
}
`

export const SectionFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  padding-top:4rem;

  h3 {
    margin-bottom: 2rem;
  }
`

export const FormContainer = styled.section`
  header {
    display: flex;
    align-items: flex-start;
    gap: 5px;

    svg {
      color: ${({ theme }) => theme["yellow-900"]};
    }

    span {
      font-size: 0.875rem;
    }
  }

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 90%;
      
      input {
        padding: 0.875rem;
        border: 1px solid #E6E5E5;
        background: #EDEDED;
        border-radius: 4px;
        
        &:focus {
          box-shadow: 0 0 0 1px ${({ theme }) => theme["purple-500"]};;
        }
      }

      div {
        display: flex;
        gap: 10px;
      }

      footer {
        margin-top: 1rem;
        svg {
          color: ${({ theme }) => theme["purple-900"]};
        }
      }
    }
`

export const TransactionType = styled(RadioGroup.Root)`
  margin-top: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'debit' | 'credit' | 'money'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  padding: 1rem;

  display: flex;
  flex: 1;
  gap: 5px;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-radius: 6px;
  border: none;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["gray-400"]};;
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme["gray-400"]};
    transition: background 0.2s;
  }

  &[data-state='checked'] {
    background: ${({ theme }) => theme["purple-100"]};;
    border: 1px solid ${({ theme }) => theme["purple-900"]};
    box-shadow: none
  }
`

export const SectionCartDetailsContainer = styled.section`
  div {
    div:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme["gray-500"]};
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 5px;
    padding-top: 1rem;

    div {
      display: flex;
      justify-content: space-between;
    }

    button {
      background-color: ${({ theme }) => theme["yellow-500"]};
      height: 3rem;
      border: none;
      box-shadow: none;
      border-radius: 6px;
      color: ${({ theme }) => theme.white};

    &:hover {
      background-color: ${({ theme }) => theme["yellow-900"]};
      transition: background-color 0.2s;
    }
    }
  }

`

export const CartDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  img {
    width: 64px;
    height: 64px;
  }
  

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 1rem;

    div {
    display: flex;
    gap: 10px;
    height: 2rem;

    button {
      border: none;
      box-shadow: none;
      font-size: 0.875rem;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 0.5rem 0.7rem;
      border-radius: 6px;
      background: ${({ theme }) => theme["gray-400"]};

      transition: background 0.2;

      svg {
        color: ${({ theme }) => theme["purple-500"]};
      }

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme["gray-500"]};
      }
    }
    }
  }

  p {
    font-weight: bold;
  }
`