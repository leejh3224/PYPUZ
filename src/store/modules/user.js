import { createAction, handleActions } from 'redux-actions'
import * as AuthAPI from '../../lib/api/auth'
import { pender } from 'redux-pender'

const SET_USER = "SET_USER"
const CHECK_LOGIN_STATUS = "CHECK_LOGIN_STATUS"
const LOGOUT = "LOGOUT"

export const setUser = createAction(SET_USER)
export const checkLoginStatus = createAction(CHECK_LOGIN_STATUS, AuthAPI.checkLoginStatus)
export const logout = createAction(LOGOUT, AuthAPI.logout)

const initialState = {
    processed: false,
    user: null // { _id, displayName }
}

export default handleActions({
    [SET_USER]: (state, action) => {
        const { payload: user } = action
        return { ...state, user }
    },
    ...pender({
        type: CHECK_LOGIN_STATUS,
        onSuccess: (state, action) => {
          const { user } = action.payload.data;
          return { ...state, user, processed: true }
        },
        onFailure: (state, action) => {
          return { ...state, user: null, processed: true }
        }
    })
}, initialState)