import React, { useContext } from 'react'
import {AuthContext} from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);
    const action = {
        type: types.login,
        payload: {
            name: "kenjiman"
        }
    }

    const handleLogin = () => {
        dispatch(action);
        history.replace('/')
    }

    return (
        <div className="containter mt-5" >
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
