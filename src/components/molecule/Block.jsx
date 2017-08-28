import React from 'react'
import styled from 'styled-components'
import { BlockContent } from '../atom/BlockContent'
import { BlockFooter } from '../atom/BlockFooter'

// if user hovers on parent, footer appears
const Wrapper = styled.div`
    position: relative;
    &:hover > .BlockFooter {
        background: rgba(43,43,43,0.6);
        opacity: 1;
    }
`

export const Block = props => (
    <Wrapper>
        <BlockContent src={props.src} />
        <BlockFooter />
    </Wrapper>
)