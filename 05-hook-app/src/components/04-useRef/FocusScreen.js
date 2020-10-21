import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        // document.querySelector('input').focus();
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input
                ref={inputRef}
                className='form-control'
                placeholder="Su nombre"
            />

            <button onClick={handleClick} className='btn btn-primary mt-3'>FOCUS</button>
        </div>
    )
}
