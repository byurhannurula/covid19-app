import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Card = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  width: 100%;
  height: 124px;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #efefef;
  box-shadow: 0 6px 8px rgba(20, 20, 20, 0.09);
  text-align: center;
  vertical-align: middle;

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
  }
`
