import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        console.log("Hey!");
    }, []);
    useEffect( () => {
        console.log("Cambio el estado del nombre!");
    }, [name]); //podemos usar name porque desestructuramos previamente el formState

    const handleInputChange = ({target}) => { // Desestructuramos el evento e.target = {target}
        // console.log([target.name]); // target.name = name
        // console.log(target.value); // target.value es el valor que va a ir tomando el input de name
        setFormState({
            ...formState, //Desestructuramos todo el objeto por si hay campos que no esten siendo modificados que tomen el valor anterior
            [target.name]: target.value, //[target.name] (Se escribe entre corchetes porque queremos que el valor de target.name sea el nombre del campo del objeto)
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message email={email}/>}
        </>
        
    )
}