import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background: RGB(55, 148, 222);
    color: #ffffff;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 10px;
`

export const Label = props => (
    <Background className="label upper">
        {props.text}
    </Background>
)