import React from 'react'
import styled from 'styled-components'
import { 
    ButtonWithLeftIcon,
    Subtitle
} from '../atom'

const Wrapper = styled.div`
    padding-left: 20px;
`

export const AuthFooter = () => (
    <Wrapper>
        <hr />
        <ButtonWithLeftIcon
            icon={'envelope-o'}
            bg={'rgba(210, 210, 210,0.9)'}
            hoverColor={'rgba(210, 210, 210,1)'}
            text={'Sign Up with Email'}
        />
        <div style={{ paddingRight: 15, paddingTop: 15 }}>
            <Subtitle text={'Terms Of Use'} center />
        </div>
    </Wrapper>
)