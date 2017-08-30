import React from 'react'
import styled, { keyframes } from 'styled-components'
import c from './colors'

const circle_animation = keyframes`
    from {
        transform: rotate(0);
    } to {
        transform: rotate(360deg);
    }
`
const CircleStyle = styled.div`
    display: ${ props => props.visible ? 'inline-block' : 'none'};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid ${c.lightGrey};
    animation: ${circle_animation} 0.7s linear infinite;
    border-color: ${c.lighterGrey};
    border-bottom-color: transparent;
`

export const Spinner = ({ visible }) => (
    <CircleStyle isVisible={visible} />
)

