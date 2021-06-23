import React, { useEffect } from 'react'
import { useCallback } from 'react';
import { useReducer } from 'react'
import './styles.css'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { TodoAdd } from './TodoAdd';

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

    

    useEffect(() => {     
        localStorage.setItem("todos", JSON.stringify(todos)); //setItem(key, value)
    }, [todos])

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

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }


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
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                        
                    />
                </div>
            </div>

        </div>
    )
}
