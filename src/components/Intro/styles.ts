import styled from "styled-components";

export const IntroContainer = styled.section`
  padding: 5.5rem 0;
  display: flex;
  justify-content: space-between;
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
    header {
      h1 {
        font-size: 2.5rem;
        line-height: 1.3;
        margin-bottom: 1rem;
        font-family: 'Baloo 2', sans-serif;
      }

      p {
        font-size: 1rem;
      }
    }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;

    svg {
      padding: 8px;
      border-radius: 50%;
      background: red;
    }
  }
`