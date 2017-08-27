import React from 'react'
import styled from 'styled-components'
import { SearchButton } from '../atom'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px;
    @media (max-width: 774px) {
        display: none;
    }
`

const Input = styled.input`
    max-width: 200px;
    height: 45px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    &:focus {
        border: 1px solid #000000;
    }
`

export const HeaderSearchBar = () => (
    <Wrapper>
        <Input type="text" placeholder="search anything" />
        <SearchButton />
    </Wrapper>
)