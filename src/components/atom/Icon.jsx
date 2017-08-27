import React from 'react'
import styled from 'styled-components'
import c from './colors'

const Wrapper = styled.div`
    font-size: ${ props => props.small ? 15 : 30 }px;
    width: ${ props => props.small ? 15 : 30 }px;
    height: ${ props => props.small ? 15 : 30 }px;
    margin: auto;
    color: ${ props => props.isWhite ? '#ffffff' : c.lightGrey};
    cursor: pointer;
    position: absolute;
    left: ${ props => (props.order - 1) * 45 }px;
    &:hover {
        color: #000000;
    }
`

export const Icon = props => (
    <Wrapper 
        order={props.order} 
        small={props.small} 
        isWhite={props.isWhite}
    >
        <i 
            className={ `fa fa-${props.name}` } 
            onClick={ props.onClick }
        />
    </Wrapper>
)
