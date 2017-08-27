import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'
import c from './colors'

const Wrapper = styled.button`
    position: relative;
    width: 70px;
    height: 45px;
    background-color: #ffffff;
    border: 2px solid ${c.kubeBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #ffffff;
        border: 2px solid ${c.kubeLightBlue};
    }
`
 
export const SearchButton = () => (
    <Wrapper>
        <div style={{ position: 'absolute', top: '25%', left: '38%' }}>
            <Icon name={'search'} small/>
        </div>
    </Wrapper>
)