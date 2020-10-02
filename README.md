# Conceptos básicos de React

## Tabla de contenidos
1. [Creación del proyecto](#creación-del-proyecto)
2. [Limpieza del cascarón](#limpieza-del-cascarón)
3. 

## Creacion del proyecto
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

##


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


