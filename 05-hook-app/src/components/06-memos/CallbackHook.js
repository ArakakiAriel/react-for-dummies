import React, { useCallback } from 'react'
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback((value = 1) => { //Con useCallback vamos a mandar un callback con la llamada a la función que querramos ejecutar
        setCounter(c => c + value); //Debo ejecutar el set counter teniendo en cuenta que podemos obtener el estado como el elemento que se le pasa al callback, así no dependemos directamente de counter
    },[setCounter]) //Se va a ejecutar sólamente si cambia la funcion setCounter


    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
