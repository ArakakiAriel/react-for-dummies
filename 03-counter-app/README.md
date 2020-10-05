## Estructura de directorios

- node_modules: Dependencias del servicio. Siempre agregar dicha carpeta en el .gitignore para no subirlo al repositorio de Github
- public: 
    - index.html: La página en sí que va a desplegar todo el contenido. (Aclaraciones dentro del archivo)
    - robots.txt: [(link)](https://support.google.com/webmasters/answer/6062608?hl=es)
- src: 
    - App.css: Archivo de estilos
    - App.js: 
    - App.test.js: Archivo de testeo del archivo App.js (Los archivos de test tendran la extension .test.js con el nombre igual al archivo que querramos testear)
    - index.js: Punto inicial de la aplicación. 
    - logo.svg: Es una imagen vectorizada 
    - serviceWorker: Se utiliza para hacer una aplicación web progresiva
    - setupTest: Se ejecuta exactamente en el primer momento en el que levantamos las pruebas y configura todo lo que necesitemos para dichas pruebas.

## Basico React (index.js)

### Librerías importadas
``` javascript
import React from 'react'; // Permite utilizar HTML en nuestro archivo js
import ReactDOM from 'react-dom'; // importamos librería de ReactDOM que se utiliza para poder renderizar en el HTML los elementos que creemos
```

### Renderizando un "Hola mundo"
```javascript
const saludo =  <h1>Hola Mundo</h1> }
const divRoot = document.querySelector('#root'); 

ReactDOM.render(saludo, divRoot); 
```
- document.querySelector: Retorna el primer elemento en el HTML que matchee con el id que le pasemos ("root") 
- ReactDOM.render(saludo, divRoot): renderizará el elemento creado (saludo) en la ubicación indicada (divRoot)

## ReactDOM ([LINK](https://reactjs.org/docs/react-dom.html))
- Nos permite crear nuestro árbol de componentes y comunicarnos entre los componentes de una manera sencilla.

## Componentes
- Existen dos tipos de componentes 
    1. Basados por funciones (NUEVO):  
    2. Basados por clases (VIEJO): En este curso no lo vemos ya que ahora React apunta a trabajar componentes en base a funciones

### Tags útiles para la creación de componentes ([EJEMPLOS]())
- < Fragment >: Puede encapsularse dentro de este tag varios elementos a retornar sin la necesidad de crear divs innecesarios (No utilizaremos esta forma ya que hay que importarlo desde react)
- <></>: Igual que el < Fragment > pero sin la necesidad de importar nada
- {variable}: Utilizaremos las llaves para poder pasar variables a nuestros elementos HTML dentro de js
```jsx
    const saludo = "Hola Mundo";

    return <h1>{saludo}</h1>
```

### Properties (props)
- Son valores que se le pueden pasar al componente para que luego éste las utilice de forma interna como variables.
- Se los puede observar en la ventana de Components tocando F12 en el navegador


# Contenido Extra

- PWA: [GoogleDevelopers - PWA](https://developers.google.com/web/ilt-}/pwa)
- React scripts: [link](https://create-react-app.dev/docs/available-scripts/)

- Para comentar una linea en VsCode si está en teclado ESP es "ctrl + }"