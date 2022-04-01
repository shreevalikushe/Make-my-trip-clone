import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGN_UP, USER_NAME } from "./auth.actionTypes";
import { updateValue } from "../../Utils/LocalStorage"
import { initialState } from "./auth.constants";

export const authReducer = (state = initialState, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state.auth,
                isLoading: true,
                error: false
            }
        }
        case USER_LOGIN_SUCCESS: {
            updateValue("userToken", payload.authToken)
            return {
                ...state.auth,
                isUserLoggedIn: true,
                isLoading: false,
                error: false,
                ...payload
            }
        }
        case USER_LOGIN_ERROR: {
            updateValue("userToken", payload.authToken)
            return {
                ...state.auth,
                isUserLoggedIn: false,
                isLoading: false,
                error: true
            }
        }
        case USER_LOGOUT: {
            updateValue("userToken", "")
            updateValue("userName", "")
            return {
                ...state.auth,
                isUserLoggedIn: false,
                userToken: ""
            }
        }
        case USER_SIGN_UP: {
            updateValue("userToken", payload.authToken)
            return {
                ...state.auth,
                isUserLoggedIn: true,
                isLoading: false,
                error: false,
            }
        }
        case USER_NAME: {
            updateValue("userName", payload)
            return {
                ...state.auth,
                isUserLoggedIn: true,
                isLoading: false,
                error: false,
                userName: payload,
                ...payload
            }
        }
        default: {
            return { ...state };
        }
    }
}