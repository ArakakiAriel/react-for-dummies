# Hooks App

## Tabla de contenidos
- [useState](#componentes-react)
    - Operador spread
- [useEffect](#useeffect-link)
- [Custom Hooks](#custom-hooks)
    - [Usar CustomHooks para formularios](#usar-customhooks-para-formularios)
    - [useFetch (Custom Hook)](#usefetch-custom-hook)
- [useRef](#useref-link)
- [useLayoutEffect](#uselayouteffect-link)
- [Memo - Método de React](#memo-método-de-react)
- [useCallback](#usecallback-link)


## useState 

### Operador spread
- Nos puede servir al momento de manejar estados con objetos de varios argumentos
- el operador spread (...state) nos va a ayudar a mantener los valores de los argumentos con el mismo valor que antes
Ejemplo:
```js
import React from 'react';
import { useState } from 'react';

export const CounterApp = () => {

    //Nuestro hook con varios argumentos
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {counter1} = state;

    return (
        <>
            <button 
                className='btn btn-primary'
                onClick={() => {setState({
                    ...state, // ===> Operador spread (Hace una copia de los valores anteriores del state)
                    counter1: counter1 + 1
                })}}
            >+1</button>
        </>
    )
}
```

## useEffect [(LINK)](https://reactjs.org/docs/hooks-reference.html#useeffect)
- El useEffect es un hook que nos permite ejecutar un efecto secundario cuando algo suceda en nuestros componentes.
- Se puede tener más de un useEffect por Componente para manejar cambios particulares según el cambio que querramos escuchar.
- Los vamos a declarar debajo de los estados, ya que generalmente vamos a querer ejecutar un efecto en caso de que se modifique algun estado en particular

### Precausiones
- Debemos tener mucho cuidado al manejar los useEffect ya que siempre habrá que tener en cuenta no crear eventos de más o que se iteren cada vez más.

Ejemplo:
```js
//Message.js
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});

    const {x, y} = coords;

    useEffect(() => {
        
        const mouseMove = (e) => {
            const coords = {
                x: e.x,
                y: e.y
            }
            setCoords(coords)
        }

        window.addEventListener('mousemove',mouseMove); //Cada vez que se monte el Componente va a crear un listener por lo que si no lo removemos se va a 

        return () => { //Acá vamos a indicar qué función va a realizar una vez que el componente Message se desmonte
            window.removeEventListener('mousemove', mouseMove); //Con esta funcion vamos a remover el event listener indicando cual es
        }
    }, [] //En este array indicamos si el use effect se va a llamar una sola vez (En caso de mandar un array vacío) o si se debe ejecutar en base a la modificacion de algun estado)

    return (
        <div>
            <h3>Un mensaje!</h3>
            <p>X: {x} - Y: {y}</p>
        </div>
    )
}
```

## Custom Hooks
- Un custom hook lo podemos utilizar para crearnos, por ejemplo, un contador y manejar el hook directamente de un sólo lugar en vez de estar creando un estado en cada Componente que nos estemos creando en nuestro proyecto.
- Acordarse que los hooks tienen por convención empezar el nombre con "use" (Ej: useCounter.js)
- También es una buena forma de no llenar de código nuestros componentes y delegar las acciones a otra clase.

Ejemplo:
```js
//useCounter.js (NUESTRO CUSTOM HOOK)
import { useState } from "react";

//Este custom hook por ejemplo va a retornar el estado del contador, la funcion incrementar y decrementar
export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState);
    
    const increment = (factor = 1) => {
        setstate(state + factor);
    }    
    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    return {
        state,
        increment,
        decrement
    }
}
```

```js
//CounterWithCustomHook.js (NUESTRO COMPONENTE)
import React from 'react';
import { useCounter } from '../../hooks/useCounter'; // Importamos nuestro custom hook

export const CounterWithCustomHook = () => {

    const {state, increment, decrement} = useCounter(0); // Llamamos al custom hook
    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr/>
 
            <button className='btn' onClick={() => {increment(10)}}>+1</button>
            <button className='btn' onClick={() => {decrement(10)}}>-1</button> 
        </>
        // Para usar funciones donde se le pasan valores, tenemos que usar una funcion de flecha que llame a la funcion que se le pasa los valores, de lo contrario va a arrojar error
    )
}

```

### Usar CustomHooks para formularios
- Una buena forma de utilizar custom hooks es para manejar los datos de los formularios. 
- En vez de tener un handleInputChange para modificar los datos dentro del Componente, lo delegamos a un customHook (useForm.js) para que lo resuelva.

Ejemplo:
```js
//useForm.js
import { useState } from 'react'

export const useForm = (initialState = {}) => {//Inicializamos el initialState como un objeto vacío para que no rompa en caso de que no se le envíe un objeto inicial
    const [values, setValues] = useState(initialState); //Creamos el estado que representa nuestro formulario

    const handleInputChange = ({target}) => { //Esta función se va a encargar de ir actualizando los datos del estado del formulario
        setValues({
            ...values, 
            [target.name]: target.value,
        })
    };

    return [values, handleInputChange]; //Devolvemos un array con el estado y el handleInputChange
}
```
```js
//FormWithCustomHook.js
import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({ //En vez de utilizar el useState, vamos a utilizar nuestro custom hook (useForm)
        name: '',
        email: '',
        password: '',
    });//Le envia al useForm un objeto que contiene name, email y password 

    const {name, email, password} = formValues; //Desestructuramos el estado en los elementos que lo conforman


    return (
        <>
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
                    onChange={handleInputChange} // Acá utilizamos el handleInputChange para que se encargue de actualizar los elementos del estado.
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

        </>
        
    )
}
```

## useFetch (Custom Hook)
- Hook para hacer peticiones fetch a APIS (get, update, post).

Ejemplo:
```js
//useFetch.js
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading:false,
                    error:null,
                    data
                });
            })
        return () => {
            setState({
                loading:true,
                error:null,
            })
        }
    }, [url])

    return state;
}

```

## useRef [(LINK)](https://reactjs.org/docs/hooks-reference.html#useref)
- Sirve para mantener una referencia mutable.
- Un caso de uso real sería por ejemplo usar un useRef para ver si el componente está o no montado, en caso de no estar montado no seguir con la ejecución de algun proceso o actualización de algún estado ya que esto dará fallas a la ejecución del mismo.

Ejemplo:
```js
//useFetch.js (Custom Hook para hacer llamadas a un API)
import { useRef } from 'react';
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true); //Con esta variable veremos si el componente sigue montado o no
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {//Acordarse que en el return del useEffect irán las acciones que queremos realizar en caso de que se desmonte nuestro componente
            isMounted.current = false; //En caso de que se desmonte el componente cambiamos el valor del useRef a false
        }
    }, [])

    
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current){ //Condicional que se fija si está o no montado, en caso de estarlo modifica el estado
                    setState({
                        loading:false,
                        error:null,
                        data
                    });
                }
            })
        return () => {
            setState({
                loading:true,
                error:null,
            })
        }
    }, [url])

    return state;
}

```

## useLayoutEffect [(LINK)](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffects)
- No es un Hook muy utilizado pero se puede utilizar para tomar medidas de los elementos html en caso de que modifiquen su tamaño
- Ver la documentacion en el LINK si se quiere saber más.

Ejemplo:
```js
import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {state: counter, increment} = useCounter(); 
    const randomQuoteUrl = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data} = useFetch(randomQuoteUrl);
    const [medition, setMedition] = useState({width:0 , height:0})

    const {width, height} = medition;

    const {quote} = !!data && data[0]; //Si viene la data entonces va a mostrar la data[0] (La doble negacion !! hace que verifique que data sea true, o sea que tenga un valor)
 
    const pTag = useRef(); //Creamos una referencia para que <p> lo esté apuntando

    useLayoutEffect(() => { //Tiene un formato igual que el useEffect
        const values = pTag.current.getBoundingClientRect(); //Obtenemos la data del layout que maneja <p>
        setMedition({width: values.width, height: values.height}) //Asigmanos el width y height de <p> en el estado. 
    }, [quote]) //En el array se indican los estados que va a estar escuchando para disparar 

    return (
        <>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className='blockquote text-right'>
            <p ref={pTag} className='mb-0'> {quote} </p> 
            </blockquote>

            <pre>
                Width: {width} - Height: {height}
            </pre>
            
            <button className='btn btn-primary' onClick={() => {increment()}}>Next quote</button>

            
        </>
    )
}

```

## Memo - Método de React
- Es una función que se suele utilizar en los Componentes para que no se vuelvan a llamar/ejecutar en caso de no recibir ninguna modificación en sus properties.
- Utiliza la versión memorizada cuando tenga que redibujar sin tener cambios en sus properties.

Ejemplo:
```js
//Small.js (Componente que va a mostrar un value que se le pase)
import React from 'react'

export const Small = React.memo(({value}) => { //La función memo lo que va a hacer es que si el Componente no tuvo algún estado modificado, este no se va a llamar constantemente con cada cambio realizado en un Componente que lo esté llamando

    console.log("Llamando a Componente Small")

    return (
        <small> {value} </small>
    )
}
)
```

## useMemo [(LINK)](https://reactjs.org/docs/hooks-reference.html#usememo)
- Al igual que el método memo visto anteriormente, éste método se encarga de no ejecutar acciones en caso de que no se modifiquen el estado de ciertos elementos.

Ejemplo:
```js
//MemoHook.js
import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const {state, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
                            //useMemo(callback, [estados]) el callback se va a llamar cada vez que se modifiquen los/el estado dentro del array, previendo así la ejecución de procesos que no querramos ejecutar innecesariamente
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]) //De esta forma podemos indicar que se realiza una tarea, siempre y cuando se modifiquen los estados dentro del array

    return (
        <div>
            <h1>MemoHook</h1>
            <h3> Counter: <small>{state}</small></h3>
            <hr/>

            <p>{memoProcesoPesado}</p> 

            <button
                className="btn btn-primary"
                onClick={increment}
            >+1</button>

            <button 
                className='btn btn-outline-primary ml-3' 
                onClick={
                    () => {setShow(!show)}
                }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

```

## useCallback [(LINK)](https://reactjs.org/docs/hooks-reference.html#usecallback)
- Nos va a servir en conjunto con el React.memo para no renderizar Componentes hijos que utilizan funciones del Componente padre en caso de que no se modifique la función en sí.
- Tiene dos casos de uso:
    1. Cuando querramos mandar una función a un Componente Hijo.
        - Tener en cuenta de utilizar el "React.memo()" en la función hija.
    2. Cuando se tiene un useEffect y el efecto tiene una dependencia y es la función, utilizaremos la función con el useCallback

Ejemplo:
```js
//CallbackHook.js
import React, { useCallback } from 'react'
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    //FUNCION useCallBack(callback, [funciones])
    const increment = useCallback((value = 1) => { //Con useCallback vamos a mandar un callback con la llamada a la función que querramos ejecutar
        setCounter(c => c + value); //Debo ejecutar el set counter teniendo en cuenta que podemos obtener el estado como el elemento que se le pasa al callback, así no dependemos directamente de counter
    },[setCounter]) //Se va a ejecutar sólamente si cambia la funcion setCounter


    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
```

```js
import React from 'react'

export const ShowIncrement = React.memo(({increment}) => { //Hay que agregarle el React.memo para que memorize también la función hija y no vuelva a ejecutar el Componente en caso de que se ejecute la función que trajo del Componente padre.

    console.log("Me volví a llamar");
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5); //Podemos enviarle un elemento a la función como cualquier otra función, no va a cambiar la forma de uso 
            }}
        >
            Incrementar
        </button>
    )
});
```