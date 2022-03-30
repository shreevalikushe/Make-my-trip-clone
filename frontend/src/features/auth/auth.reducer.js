import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionTypes";
import { updateValue } from "../../Utils/LocalStorage"
import { initialState } from "./auth.constants";

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state.auth,
                isLoading: true,
                error: false
            }
        }
        case USER_LOGIN_SUCCESS: {
            updateValue("userToken", payload.token)
            return {
                ...state.auth,
                isUserLoggedIn: true,
                isLoading: false,
                error: false,
                ...payload
            }
        }
        case USER_LOGIN_ERROR: {
            updateValue("userToken", payload.userToken)
            return {
                ...state.auth,
                isUserLoggedIn: false,
                isLoading: false,
                error: true
            }
        }
        case USER_LOGOUT: {
            updateValue("userToken", "")
            return {
                ...state.auth,
                isUserLoggedIn: false,
                userToken: ""
            }
        }
        default: {
            return { ...state };
        }
    }
}