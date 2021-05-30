import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_STAFF } from './types'

export const setStaff = (staff) => {
    console.log(staff)
    return {
        type: SET_STAFF,
        staff
    }
}

export function logoutPin() {
    return (dispatch) => {
        localStorage.removeItem("pinToken");
        setAuthorizationToken(false);
        dispatch(setStaff({}));
    };
}