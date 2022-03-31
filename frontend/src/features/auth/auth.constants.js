import { getValue } from "../../Utils/LocalStorage"

export const initialState = {
    isUserLoggedIn: getValue("userToken") ? true : false,
    userToken: getValue("userToken"),
    isLoading: false,
    error: false
}