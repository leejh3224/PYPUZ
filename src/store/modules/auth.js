import { createAction, handleActions } from 'redux-actions'
import * as AuthAPI from '../../lib/api/auth'
import social from '../../lib/social'
import { pender } from 'redux-pender'

const LOCAL_LOGIN = 'LOCAL_LOGIN'
const SET_ERROR = 'SET_ERROR'
const CHANGE_INPUT = 'CHANGE_INPUT'

export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin) // email, password
export const setError = createAction(SET_ERROR) // ({ email, password }) [nullable]
export const changeInput = createAction(CHANGE_INPUT) // ({name, value})

const initialState = {
    form: {
        email: '',
        password: ''
    },
    error: null,
    loginResult: null
}

export default handleActions({
    ...pender({
      type: LOCAL_LOGIN,
      onSuccess: (state, action) => {
        const { data: loginResult } = action.payload;
        return { ...state, loginResult }
      },
      onFailure: (state, action) => {
        return { ...state, loginResult: ['잘못된 계정정보입니다.']}
      }
    }),
    [SET_ERROR]: (state, action) => {
        const error = action.payload
        return { ...state, error }
    },
    [CHANGE_INPUT]: (state, action) => {
        const { form } = state.form
        const { name, value } = action.payload
        return { 
            ...state, 
            form: {
                ...state.form,
                [name]: value
            } 
        }
    }
}, initialState)


