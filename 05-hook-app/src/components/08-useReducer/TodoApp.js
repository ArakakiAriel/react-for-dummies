import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {
    //Funcion para obtener del local storage, si no encuentra datos en la key "todos" crea un array vacío como initialState
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    //dispatch= es una funcion que se le manda una acción y va a saber a que reducer va a redibujar la funcion.
    //reducer=funcion reducer - initialState=estado inicial que se le puede mandar o no 
    //init: Va a ayudar a react para que compute el estado inicial y funcione más rápido
    const [todos, dispatch] = useReducer(todoReducer, [], init);

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

    const handleRemove = (todoId) => {
        const action = {
            type: 'remove',
            payload: todoId
        }
        //Se lo enviamos al reducer
        dispatch(action);
    }

    const handleDone = (todoId) => {
        dispatch({
            type: 'done',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className={`text-center ${(todo.done) && 'complete'}`} onClick={() => {handleDone(todo.id)}}>{i + 1}. {todo.desc}</p>
                                    <button className="btn btn-danger" onClick={() => {handleRemove(todo.id)}}>Borrar</button>
                                </li>
                            ))    
                        }
                    </ul>
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
