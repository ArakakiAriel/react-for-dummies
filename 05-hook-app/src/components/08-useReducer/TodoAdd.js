import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    //custom hook para manejar los inputs y que cuando se haga un submit se envie el valor del input
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault(); //Siempre que se utiliza un form poner esto para que no actualice la pagina
        
        if(description.trim()){
            //Creamos un elemento
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };

            //Se lo enviamos al reducer
            handleAddTodo(newTodo);
        }

        //Llamo a la función reset para que limpie mi input por cada submit
        reset();
    }

    return (
        <>
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
        </>
    )
}
