import React from 'react'
import styled from 'styled-components'

import { Icon } from './Icon'
import { Icons } from './Icons'

const Wrapper = styled.div`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 23px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-top: 10px;
`
const Label = styled.p`
    position: absolute;
    right: 20px;
    top: 20px;
    color: #ffffff;
`

export const BlockFooter = () => (
    <Wrapper className="BlockFooter" >
        <Icons>
            <Icon name={'caret-up'} order={1} isWhite />
            <Icon name={'caret-down'} order={2} isWhite />
        </Icons>
        <Label className="title">P 1,023</Label>
    </Wrapper>
)