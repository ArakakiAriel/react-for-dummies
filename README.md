# Conceptos básicos de React

## Tabla de contenidos
- [Creación del proyecto](#creación-del-proyecto)
- [Limpieza del cascarón](#limpieza-del-cascarón)
- [01-intro-react](https://github.com/ArakakiAriel/react-for-dummies/tree/master/01-intro-react)
- [02-intro-javascript](https://github.com/ArakakiAriel/react-for-dummies/tree/master/02-intro-javascript)
- [Componentes (React)](#componentes-react)
- [03-counter-app](https://github.com/ArakakiAriel/react-for-dummies/tree/master/03-counter-app)
  - Estructura de directorios
  - Basico React
    -  ReactDOM
      - Componentes
      - PropTypes y DefaultProps
      - Events
      - Hooks
  - Test Unitarios
      - Enzyme
- [04-gif-expert-app](https://github.com/ArakakiAriel/react-for-dummies/tree/master/04-gif-expert-app)
  - useState
  - Form, Input text y Estados (Componente)
  - Comunicación entre componentes
  - useEffect
  - Custom Hooks
  - Animaciones por CSS (Animate)
  - Despliegue de aplicación web (Local y Github Pages)
- [05-hook-app](https://github.com/ArakakiAriel/react-for-dummies/tree/master/05-hook-app)
  - useState
    - Operador spread
  - useEffect
  - Custom Hooks
      - Usar CustomHooks para formularios
      - useFetch (Custom Hook)
  - useRef
  - useLayoutEffect
  - Memo - Método de React
  - useCallback
- [BonusTrack](#bonustrack)
  - Emmet 
  - Extensiones para VSCode
  - React y Redux Dev Tools (Chrome)
  - [Shorcuts para creación de Componentes](#shorchuts-para-creación-de-componentes)

## Creacion del proyecto ([LINK](https://reactjs.org/docs/create-a-new-react-app.html))
- Para crear el "cascarón" del proyecto utilizaremos la siguiente línea de código en la carpeta raíz donde la querramos.
``` 
npx create-react-app nombre-del-proyecto
```


## Limpieza del cascarón
- Borraremos los siguientes elementos dentro de la carpeta src
  1. App.test
  2. logo.svg
  3. setupTests.js
- Dentro de App.js borramos todo lo que está dentro del div "App" y le modificamos su nombre a "app"

## Componentes (React)
- Es una pequeña pieza de código encapsulada que realiza un trabajo en específico y es reutilizable. Puede tener estado o no.
  - Estado: Como se encuentra la información del componente en un punto determinado en el tiempo.
- Es una buena práctica llamar a los componentes con la notación "upper camel case" (Ej: NuevoComponente)


-------------------------
# BonusTrack 

## Emmet ([LINK](https://emmet.io/))
- Emmet es una extension para VsCode que nos brinda atajos para crear más rápido las tablas o bases de html

```javascript
tr>td*3 (nos va a crear)
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
```

#### Instalación
1. Bajarse la extension Mithril Emmet en VsCode
2. Ir a File -> Preferences -> Settings y tocar arriba a la derecha el boton de "Open Settings JSON"
3. Incluir lo siguiente al final del archivo:
```javascript
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
```

## Extensiones para VSCode
- Instalar las siguientes extensiones para poder facilitar el uso de react en el IDE:
  - Reactjs code snippets
  - Prettier - Code formatter
  - Bracket Pair Colorizer
  - ES7 React/Redux/GraphQL/React-Native snippets
  - Simple React Snippets
  - Auto Close Tag


## React y Redux Dev Tools ([REACT](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)) ([REDUX](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en)) 
- Instalar extensiones para google chrome


### Shorcuts para creación de Componentes:

- rafce: Nos crea el Componente cáscara 
```js
import React from 'react'

const CounterApp = () => {
    return (
        <div>
            
        </div>
    )
}

export default CounterApp
```

- rafcp: Nos crea el Componente cáscara con un proptypes
```js
import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = props => {
    return (
        <div>
            
        </div>
    )
}

CounterApp.propTypes = {

}

export default CounterApp
```



