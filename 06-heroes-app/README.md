# Contenido de la sección

- [Router](#router)
    - [Creacion de un segundo router](#creacion-de-un-segundo-router)
- [History push/replace](#history-push-replace)
    - [Push](#push)
    - [Replace](#replace)
- [Contenido Extra](#contenido-extra)

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


## Leer argumentos por URL
- Para poder leer argumentos que le estaremos pasando en la URL podemos utilizar un Hook creado por react-router-dom llamado useParams

- Ejemplo:
    ```js
    import { useParams } from 'react-router-dom';
    const params = useParams(); //custom hook que obtiene todos los parametros que mandemos por url ({hero_id: marvel-hulk})
    ```
