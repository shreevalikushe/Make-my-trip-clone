import { getValue } from "../../Utils/LocalStorage"

export const initialState = {
    isUserLoggedIn: getValue("userToken") ? true : false,
    userToken: getValue("userToken"),
    userName: getValue("userName"),
    isLoading: false,
    error: false
}