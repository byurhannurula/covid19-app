import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { useFetch } from '@/hooks'
import { Wrapper } from '@/styles'

export const Header = () => {
  const router = useRouter()

  // Get countries for dropdown menu
  const { response } = useFetch('https://covid19.mathdro.id/api/countries')

  return (
    <StyledHeader>
      <Wrapper>
        <h3>COVID-19</h3>

        <StyledSelect
          name="country"
          defaultValue="0"
          onChange={e => router.push(`/${e.target.value}`)}
        >
          <option value="0" disabled>
            Please select country...
          </option>
          {response &&
            Object.entries(response).map(el => (
              <option value={el[1]} key={el[0]}>
                {el[0]}
              </option>
            ))}
        </StyledSelect>
      </Wrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  margin-bottom: 56px;
  box-shadow: 0 3px 6px rgba(20, 20, 20, 0.05);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledSelect = styled.select`
  -webkit-appearance: none;
  width: 256px;
  outline: none;
  color: #141414;
  font-size: 0.95em;
  border-radius: 4px;
  border: 1px solid #cccccc;
  padding: 0.6em 0.7em 0.7em;
  background-color: transparent;
  background-image: url('/chevron-down.svg');
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 18px;
`
