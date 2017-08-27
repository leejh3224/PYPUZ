import React from 'react'
import styled from 'styled-components'
import c from './colors'

const Panel = styled.img`
    border: 1px solid ${c.lightGrey};
    background-color: #eee;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
`

export const BlockContent = props => (
    <Panel 
        src={ props.src } 
        alt={'image'} 
        style={{
            height: Math.floor(Math.random() * 200) + 300
        }}
    />
)