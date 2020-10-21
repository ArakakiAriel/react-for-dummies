import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(0); 
    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr/>
 
            <button className='btn' onClick={() => {increment()}}>+1</button>
            <button className='btn' onClick={reset}> RESET </button>
            <button className='btn' onClick={() => {decrement()}}>-1</button> 
        </>
        //Para usar funciones donde se le pasan valores, tenemos que usar una funcion de flecha que llame a la funcion que se le pasa los valores, de lo contrario va a arrojar error
    )
}
