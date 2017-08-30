import React from 'react'
import { 
    AuthHeader,
    AuthBody
} from '../molecule'
import { AuthWrapper } from './Auth'
import { Subtitle } from '../atom'

export const AuthRegister = () => (
    <AuthWrapper>
        <AuthHeader/>
        <AuthBody additionalFields={['Username', 'Confirm Password']} />
        <div style={{ marginTop: 20 }}>
            <Subtitle text={'Welcome to PYPUZ'} center />
        </div>
    </AuthWrapper>
)
