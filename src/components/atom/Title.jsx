import React from 'react'
import styled from 'styled-components'
import c from './colors'

const Wrapper = styled.div`
    width: auto;
    display: flex;
    padding-top: 20px;
    padding-left: 20px;
    justify-content: ${ props => props.center && 'center' };
`

export const Title = props => (
    <Wrapper center={props.center}>
        <h3 
            className="title" 
            style={{ 
                paddingBottom: 5,
                borderBottom: props.hasUnderline && `1px solid ${c.lightGrey}`
            }}
        >
            { props.text }
        </h3>
    </Wrapper>
)