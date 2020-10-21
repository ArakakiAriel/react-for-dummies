import React from 'react';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log("Email cambio")
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault(); //Acordarse de siempre poner un e.preventDefault() cuando se utilizan formularios en react para que no actualice la página
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>GUARDAR</button>
        </form>
        
    )
}