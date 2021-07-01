# Contenido de la sección

- [Router](#router)
    - [Creacion de un segundo router](#creacion-de-un-segundo-router)
- [History push/replace](#history-push-replace)
    - [Push](#push)
    - [Replace](#replace)
- [QueryString](#querystring-link)
    - [Agregar parametros por url](#agregar-parametros-por-url)
    - [useLocation() y QueryString](#uselocation-y-querystring)
- [Proteccion de rutas](#proteccion-de-rutas)
    -[](#)
    -[](#)
    -[](#)
- [QueryString](#contenido-extra)
    - [CSS](#css)
    - [Color thief](#color-thief-link)

## Router

### Creacion de un segundo router
- Esto se utiliza cuando por ejemplo queremos tener rutas dentro de nuestra pagina que no compartan un mismo estilo (Ej: Login page <> Main page)

    - Nuestro AppRouter(main) tendra la siguiente pinta
    ```js
        import React from 'react'
        import {
            BrowserRouter as Router,
            Switch,
            Route
        } from "react-router-dom";
        import { LoginScreen } from '../components/login/LoginScreen'
        import { Navbar } from '../components/ui/NavBar';
        import { DashboardRoutes } from './DashboardRoutes'; //Nuestra ruta secundaria
        export const AppRouter = () => {
            return (
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/login" component={LoginScreen}/>

                            
                            <Route path="/" component={DashboardRoutes}/> //Acordarse de sacar el exact en este path
                        </Switch>
                    </div>
                </Router>
            )
        }
    ```
    - Fijarse que solo el main router tendra ```<Router>```

- Nuestra ruta secundaria (DashboardRoutes): 

    ```js
        import React from 'react'
        import { Navbar } from '../components/ui/NavBar'
        import {
            Switch,
            Route,
            Redirect
        } from "react-router-dom";
        import { MarvelScreen } from '../components/marvel/MarvelScreen';
        import { DcScreen } from '../components/dc/DcScreen';
        import { HeroScreen } from '../components/hero/HeroScreen';


        export const DashboardRoutes = () => {
            return (
                <>
                    <Navbar/>

                    <div>
                        <Switch>
                            <Route exact path="/marvel" component={MarvelScreen} />
                            <Route exact path="/dc" component={DcScreen} />
                            <Route exact path="/heroe/:hero_id" component={HeroScreen} />
                            <Redirect to="/marvel" />
                        </Switch>
                    </div>
                </>
            )
        }

    ```
    - La ruta secundaria sera muy parecida pero sin el ```<Router>```

## History push/replace
- El history es una propiedad que se hereda del Route en cada componente Screen y este puede ser extraido para realizar acciones como un push, goBack, goForward, replace

### Push
- El ```history.push()``` se utiliza para redireccionar la url a alguna otra.
- Por ej:
    ```js
    export const LoginScreen = ({history}) => {
        const handleLogin = () => {
            history.push('/'); //La redireccionamos a la pagina ppal
        }
    }
    ```

### Replace
- El ```history.replace()``` se utiliza para modificar en el historial la ruta actual por alguna otra ruta, haciendo asi que el usuario al tocar el boton de "atras" no pueda volver a la ruta anterior (Utilizado para login).
- Por ej:
    ```js
    export const LoginScreen = ({history}) => {
        const handleLogin = () => {
            history.replace('/'); //La redireccionamos a la pagina ppal
        }
    }
    ```


## UseParams()
- Para poder leer argumentos que le estaremos pasando en la URL podemos utilizar un Hook creado por react-router-dom llamado useParams

- Ejemplo:

    ```js
    //Router class
    <Route exact path="/hero/:hero_id" component={HeroScreen} /> //De esta forma declaramos el nombre del parametro que estamos pasando en la url (hero_id en este caso)
    ```

    ```js
    //Screen class
    import React from 'react'
    import { Redirect, useParams } from 'react-router-dom';

    export const HeroScreen = ({history}) => {
        
        const params = useParams(); //custom hook que obtiene todos los parametros que mandemos por url

        const hero_id = params.hero_id;
        console.log(hero_id);
    }
    ```

## QueryString [(LINK)](https://www.npmjs.com/package/query-string)

### Agregar parametros por url
- Para poder agregar algun parametro por url (Ej: ?q="Superman") podemos utilizar el history que previamente vimos y realizar un push
    ```js 
    export const SearchScreen = ({history}) => {

    const someAction = (e) => {
        e.preventDefault();
        reset();

        history.push(`?q=${heroName}`); //Esto agregaria a nuestra url donde estamos parados lo pasado por funcion
    }
    }
    ```

### useLocation() y QueryString
- Para obtener toda la ruta de parametros podemos utilizar el useLocation()
- Para poder parsear dichos parametros utilizaremos queryString
    ``` npm i query-string```

    ```js
    import { useLocation } from 'react-router-dom'; 
    import queryString from "query-string";

    export const SearchScreen = ({history}) => {
        const location = useLocation(); 

        const urlParameters = queryString.parse(location.search);

    }
    
    ```

## Proteccion de rutas






























# Contenido Extra

## CSS 

### How to configure an Animation. (.css) [(LINK)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
```css
.img{
    border-radius: 15px 50px; 
    animation-name: moveInLeft;
    animation-duration: 1s; 
    /*
    animation-delay: 3s;
    animation-iteration-count: 3; Va a iterar el efecto X cantidad de veces
    */
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px) translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: translate(0px);
  }
}

```

- Para poder sacar el problema del shaky podemos implementar la siguiente propiedad al contenedor padre
```css
    backface-visibility: hidden;
``` 


## COLOR THIEF [(LINK)](https://lokeshdhakar.com/projects/color-thief/#getting-started)
- Grab the color palette from an image using just Javascript.

```terminal
    npm i --save colorthief
```
