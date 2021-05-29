import axios from 'axios';
import jwt from 'jsonwebtoken'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_USER } from './types'

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export function login(data) {
    return (dispatch) => {
        return axios
            .post("/merchant/v1/login", data)
            .then((response) => {
                const token = response.data.accessToken;
                localStorage.setItem("token", token);
                setAuthorizationToken(token);
                dispatch(setUser(jwt.decode(token)));
            })
            .catch((e) => {
                console.log(e);
            });
    };
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem("token");
        setAuthorizationToken(false);
        dispatch(setUser({}));
    };
}