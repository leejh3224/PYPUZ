import React from 'react'
import styled from 'styled-components'
import c from '../atom/colors'
import { 
    AuthHeader,
    AuthBody,
    AuthFooter
} from '../molecule'

export const AuthWrapper = styled.div`
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

export const Auth = ({
    form,
    onChangeInput,
    onLogin
}) => {

    return (
        <AuthWrapper>
            <AuthHeader />
            <AuthBody
                form={form} 
                onChangeInput={onChangeInput}
                onLogin={onLogin}
            />
            <AuthFooter />
        </AuthWrapper>
    )
}