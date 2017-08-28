import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

const Wrapper = styled.button`
    position: relative;
    display: block;
    width: 250px;
    height: 50px;
    background-color: ${ props => props.bg };
    color: #ffffff;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background-color: ${ props => props.hoverColor };
    }
`

export const ButtonWithLeftIcon = props => (
    <Wrapper bg={props.bg} hoverColor={props.hoverColor}>
        <div 
            style={{ 
                position: 'absolute', 
                top: 5,
                left: 10
            }}
        >
            <Icon 
                name={props.icon} 
                isWhite 
            />
        </div>
        { props.text }
    </Wrapper>
)