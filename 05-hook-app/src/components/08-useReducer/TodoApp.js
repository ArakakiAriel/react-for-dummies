import React, { useEffect } from 'react'
import { useCallback } from 'react';
import { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

//init: Retorna el valor inicial que se le quiere dar a nuestro reducer
const init = () => {
    //Funcion para obtener del local storage, si no encuentra datos en la key "todos" crea un array vacío como initialState
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    //dispatch= es una funcion que se le manda una acción y va a saber a que reducer va a redibujar la funcion.
    //reducer=funcion reducer
    //initialState=estado inicial que se le puede mandar o no 
    //init: Va a ayudar a react para que compute el estado inicial y funcione más rápido

    //custom hook para manejar los inputs y que cuando se haga un submit se envie el valor del input
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {     
        localStorage.setItem("todos", JSON.stringify(todos)); //setItem(key, value)
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault(); //Siempre que se utiliza un form poner esto para que no actualice la pagina
        
        if(description.trim()){
            //Creamos un elemento
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };

            //Creamos una acción y le asignamos el elemento
            const action = {
                type: 'add',
                payload: newTodo
            };

            //Se lo enviamos al reducer
            dispatch(action);
        }

        //Llamo a la función reset para que limpie mi input por cada submit
        reset();
        
    }

    const handleRemove = useCallback((todoId) => {
        console.log("Uso un handleRemove")
        const action = {
            type: 'remove',
            payload: todoId
        }
        //Se lo enviamos al reducer
        dispatch(action);
    }, [dispatch])

    const handleDone = useCallback((todoId) => {
        console.log("uso un handleDone")
        dispatch({
            type: 'done',
            payload: todoId
        })
    }, [dispatch])

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDone={handleDone}
                        handleRemove={handleRemove}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Ingrese nuevo TODO"
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        >
                        </input>

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
