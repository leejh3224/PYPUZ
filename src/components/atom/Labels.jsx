import React from 'react'
import styled, { css } from 'styled-components'
import { Label } from './Label'

const isNotMobile = css`
    @media(min-width: 770px) {
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;    
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 20px;
    ${ isNotMobile };
`

export const Labels = props => (
    <Wrapper>
        { props.texts.map((text, index) => (
                <Label 
                    key={index}
                    text={text}
                />
        )) }
    </Wrapper>
)