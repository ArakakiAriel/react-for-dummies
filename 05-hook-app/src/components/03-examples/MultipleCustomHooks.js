import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {state: counter, increment} = useCounter(); 
    const randomQuoteUrl = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {loading, data} = useFetch(randomQuoteUrl);

    const {author, quote} = !!data && data[0]; //Si viene la data entonces va a mostrar la data[0] (La doble negacion !! hace que verifique que data sea true, o sea que tenga un valor)
 
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading
                ?
                    (<div className='alert alert-info text-center'>
                    Loading...
                    </div>)
                :
                    (<blockquote className='blockquote text-right'>
                    <p className='mb-0'> {quote} </p>
                    <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>)
            }
            
            <button className='btn btn-primary' onClick={() => {increment()}}>Next quote</button>

            
        </>
    )
}
