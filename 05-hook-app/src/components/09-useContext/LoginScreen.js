import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    
    const {setUser} = useContext(UserContext);
    
    return (
        <>
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-secondary" onClick={() => {setUser({id:123, name:"Rolando Rosas", email:"rolando.rosas@gmail.com"})}}>
                Login
            </button>
        </>
    )
}
