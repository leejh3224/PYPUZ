import React from 'react'
import styled from 'styled-components'
import c from '../atom/colors'
import { 
    AuthHeader,
    AuthBody,
    AuthFooter
} from '../molecule'

const Wrapper = styled.div`
    width: auto;
    padding-right: 20px;
    margin-top: 20px;
    margin-left: 20%;
    margin-right: 20%;
    border: 1px solid ${c.lighterGrey};
    @media(max-width: 575px) {
        margin-left: 10%;
        margin-right: 10%;
    }
`

export const Auth = () => (
    <Wrapper>
        <AuthHeader />
        <AuthBody />
        <AuthFooter />
    </Wrapper>
)