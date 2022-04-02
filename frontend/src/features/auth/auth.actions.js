import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGN_UP, USER_NAME } from "./auth.actionTypes";

export const loginRequest = () => ({
    type: USER_LOGIN_REQUEST,
})

export const loginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
})

export const loginError = (error) => ({
    type: USER_LOGIN_ERROR,
    payload: error
})

export const logout = () => ({
    type: USER_LOGOUT,
})

export const signUp = (payload) => ({
    type: USER_SIGN_UP,
    payload
})

export const getUserName = (payload) => ({
    type: USER_NAME,
    payload
})