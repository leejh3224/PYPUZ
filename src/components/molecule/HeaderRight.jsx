import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'
import { 
    Icon, 
    Icons 
} from '../atom'

// mobile-clear-fix
const Wrapper = styled.div`
    @media (max-width: 774px) {
        position: relative;
        top: -70px;
    }
`

const SignInButton = styled.button`
    margin-top: 16.5px;
    margin-right: 20px;
`

export const HeaderRight = props => (
    <Wrapper>
        { props.isLoggedIn ? (
            <Icons>
                <Icon name={'user-o'} order={1} onClick={ () => alert('알림') }/>
                <Icon name={'heart-o'} order={2} />
                <Icon name={'bell-o'} order={3} />
                <Icon name={'upload'} order={4} />
            </Icons>
        ) : (
            <Link to="/login">
                <SignInButton>
                    Sign In
                </SignInButton>
            </Link>
        )}
    </Wrapper>
)