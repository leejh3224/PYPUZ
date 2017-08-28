import React from 'react'
import styled from 'styled-components'
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

// sign in button or if logged in show icons
const SignInButton = styled.button`
    margin-top: 16.5px;
    margin-right: 20px;
`

export const HeaderRight = () => (
    <Wrapper>
         <SignInButton>Sign In</SignInButton> 
        {/* <Icons>
            <Icon name={'user-o'} order={1} onClick={ () => alert('알림') }/>
            <Icon name={'heart-o'} order={2} />
            <Icon name={'bell-o'} order={3} />
            <Icon name={'upload'} order={4} />
        </Icons> */}
    </Wrapper>
)