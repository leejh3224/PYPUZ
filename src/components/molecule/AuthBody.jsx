import React from 'react'
import styled from 'styled-components'
import {
    ButtonWithLeftIcon,
    Subtitle
} from '../atom'

const Wrapper = styled.div`
    diplay: flex;
    flex-direction: column;
    padding-left: 20px;
`

const Input = styled.input`
    width: 250px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
`

const SignInButton = styled.button`
    width: 250px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
`

const BodyDivider = () => (
    <div style={{ marginTop: 20, paddingRight: 20 }}>
        <Subtitle text={'OR'} center />
    </div>
)

export const AuthBody = () => (
    <Wrapper>
        <ButtonWithLeftIcon
            icon={'facebook'}
            bg={'rgba(59, 89, 152, 0.9)'}
            hoverColor={'rgba(59, 89, 152, 1)'}  
            text={'continue with Facebook'} 
        />
        <ButtonWithLeftIcon
            icon={'google'} 
            bg={'rgba(211, 72, 54, 0.9)'}
            hoverColor={'rgba(211, 72, 54, 1)'}   
            text={'continue with Google+'} 
        />
        <BodyDivider />
        <Input type={'text'} placeholder={'Email'} />
        <Input type={'text'} placeholder={'Password'} />
        <SignInButton>Sign In</SignInButton>
    </Wrapper>
)