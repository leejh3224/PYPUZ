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
        top: -90px;
    }
`

export const HeaderIcons = () => (
    <Wrapper>
        <Icons>
            <Icon name={'user-o'} order={1} onClick={ () => alert('알림') }/>
            <Icon name={'heart-o'} order={2} />
            <Icon name={'bell-o'} order={3} />
            <Icon name={'upload'} order={4} />
        </Icons>
    </Wrapper>
)