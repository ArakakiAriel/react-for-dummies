import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {state: counter, increment} = useCounter(); 
    const randomQuoteUrl = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data} = useFetch(randomQuoteUrl);
    const [medition, setMedition] = useState({width:0 , height:0})

    const {width, height} = medition;

    const {quote} = !!data && data[0]; //Si viene la data entonces va a mostrar la data[0] (La doble negacion !! hace que verifique que data sea true, o sea que tenga un valor)
 
    const pTag = useRef();

    useLayoutEffect(() => {
        const values = pTag.current.getBoundingClientRect();
        setMedition({width: values.width, height: values.height})
    }, [quote])

    return (
        <>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className='blockquote text-right'>
            <p ref={pTag} className='mb-0'> {quote} </p>
            </blockquote>

            <pre>
                Width: {width} - Height: {height}
            </pre>
            
            <button className='btn btn-primary' onClick={() => {increment()}}>Next quote</button>

            
        </>
    )
}
