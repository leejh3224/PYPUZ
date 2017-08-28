import React from 'react'
import styled from 'styled-components'

import { Block } from '../molecule'

const Wrapper = styled.div`
    column-count: 3;
    column-gap: 1em;
    width: 85%;
    margin-left: 10%;
    @media (min-width: 451px) and (max-width: 1000px) {
        column-count: 2;
    }
    @media(max-width: 450px) {
        column-count: 1;
    }
`

export const Blocks = props => (
    <Wrapper>
        { props.srcs.map(src => (
            <Block src={src} />
        )) }
    </Wrapper>
)
