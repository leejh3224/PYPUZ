import React from 'react'
import styled from 'styled-components'
import { 
    Title,
    Subtitle
} from '../atom'

const Wrapper = styled.div`
    height: auto;
`;

export const AuthHeader = () => (
    <Wrapper>
        <Title text={'PYPUZ'} center hasUnderline />
        <Subtitle text={'Sign In for full access'} center />
    </Wrapper>
)