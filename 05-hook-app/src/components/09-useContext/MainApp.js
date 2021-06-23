// Main aplication
import React, {useState} from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}> //De esta manera estaremos enviando un objeto a nuestras rutas
            <AppRouter/>
        </UserContext.Provider>
    )
}
