import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: auto;
    display: flex;
    padding-top: 20px;
    padding-left: 20px;
    justify-content: ${ props => props.center && 'center' };
`

export const Title = props => (
    <Wrapper center={props.center}>
        <h3 className="title">{ props.text }</h3>
    </Wrapper>
)