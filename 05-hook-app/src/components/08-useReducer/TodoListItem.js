import React from 'react'

export const TodoListItem = React.memo(({id, flagDone, handleDone, index, description, handleRemove}) => {
    console.log("TodoListItem")
    return (
        <li
                    key={id}
                    className="list-group-item"
                >
                    <p className={`text-center ${(flagDone) && 'complete'}`} onClick={() => {handleDone(id)}}>{index + 1}. {description}</p>
                    <button className="btn btn-danger" onClick={() => {handleRemove(id)}}>Borrar</button>
        </li>
    )
})
