import React, { Component } from 'react'
import { Auth } from '../components/organism'
import { Spinner } from '../components/atom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import storage from '../lib/storage'
import { withRouter } from 'react-router'
import * as userActions from '../store/modules/user';
import * as authActions from '../store/modules/auth';

class AuthContainer extends Component {

    handleChangeInput = e => {
        const { AuthActions } = this.props
        const { name, value } = e.target

        AuthActions.changeInput({
            name,
            value
        })
    }

    handleLogin = async () => {
        const {
            AuthActions,
            UserActions,
            form,
            history
        } = this.props
        const { 
            email,
            password
        } = form

        try {
            await AuthActions.localLogin({email, password})
            const { loginResult } = this.props
            storage.set('__PYPUZ_USER__', loginResult)
            UserActions.setUser(loginResult)
            AuthActions.setError(null)
            if (loginResult) {
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    render () {
        const {
            form,
            pending
        } = this.props

        const {
            handleChangeInput,
            handleLogin
        } = this

        return (
            <div>
                 <Auth
                    onLogin={handleLogin}
                    form={form}
                    onChangeInput={handleChangeInput}
                /> 
                <Spinner visible={pending} />
            </div>
        )
    }
}

export default connect(
    state => ({
        form: state.auth.form,
        error: state.auth.error,
        loginResult: state.auth.loginResult,
        pending: state.pender.pending['LOCAL_LOGIN']
    }),
    dispatch => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(withRouter(AuthContainer))

