//Definimos el initial state
const initialState = [{
    id: 1,
    todo: 'comprar leche',
    done: false
}]; 

//Definimos el reducer que le llega un state y un action
const todoReducer = (state=initialState , action) => {

    //Las actions van a ser objetos con el formato {type, payload}  
    if( action?.type === 'agregar' ){
        return [...state, action.payload];
    }

    return state; //Siempre tiene que regersar un nuevo estado
}

let todos = todoReducer(); //Inicializo el todoReducer

const newTodo = {
    id: 2,
    todo: 'comprar carne',
    done: false
};

const agregarTodoAction = {
    type: 'agregar', //Type va a indicar el nombre de la accion
    payload: newTodo //Payload será el nuevo elemento que querramos agregar al reducer en este caso
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);