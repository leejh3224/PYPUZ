import React from 'react'
import styled from 'styled-components'
import c from './colors'

const Wrapper = styled.div`
    width: auto;
    display: flex;
    padding-left: 20px;
    justify-content: ${ props => props.center && 'center' };
`

export const Subtitle = props => (
    <Wrapper center={props.center}>
        <h6 
            className="title" 
            style={{ 
                marginTop: -10,
                color: c.lightGrey 
            }}
        >
            { props.text }
        </h6>
    </Wrapper>
)