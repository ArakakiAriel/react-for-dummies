import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = React.memo(({todos, handleDone, handleRemove}) => {
    console.log("TodoList")
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map((todo, i) => (
                <TodoListItem 
                    key={todo.id}
                    id={todo.id}
                    flagDone={todo.done}
                    handleDone={handleDone}
                    index={i}
                    description={todo.desc}
                    handleRemove={handleRemove}
                />
            ))    
        }
        </ul>
    )
})
