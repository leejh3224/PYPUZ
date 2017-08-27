import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
    position: relative;
    width: ${ props => (props.children.length + 1) * 30 }px;
    height: 45px;
    padding-left: 15px;
    margin: 20px;
`

export const Icons = ({ children }) => (
    <IconWrapper length={children.length}>
        { children }
    </IconWrapper>
)