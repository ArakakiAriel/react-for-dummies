# Contenido de la sección

- [Estructura de directorios](#estructura-de-directorios)
- [Basico React](#basico-react-index.js)
	-  [ReactDOM](#reactdom-link)
    - [Componentes](#componentes-ejemplo)
    - [PropTypes y DefaultProps](#proptypes-y-defaultprops)
    - [Events](#events-link)
    - [Hooks](#hooks)
- [Test Unitarios](#test-unitarios)
    - [Enzyme](#enzyme-link)
- [Contenido Extra](#contenido-extra)

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

## Componentes ([EJEMPLO](https://github.com/ArakakiAriel/react-for-dummies/blob/master/03-counter-app/src/PrimeraApp.js))
- Existen dos tipos de componentes 
    1. Basados por funciones (NUEVO):  
    2. Basados por clases (VIEJO): En este curso no lo vemos ya que ahora React apunta a trabajar componentes en base a funciones

### Tags útiles para la creación de componentes 
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

## PropTypes y DefaultProps

- PropTypes: Se utilizan para crear validaciones de propiedades, ya sea si es obligatorio o el tipo de dato que queremos que nos traiga
- DefaultProps: Se declara si es necesario indicar algún valor por defecto para la propiedad en caso de que no se mande.

- Importación:
```js
import PropTypes from 'prop-types';
```
- Uso:
```js
const ComponenteEjemplo = ( {prop, otraProp} ) => {
    //Algun código
}

ComponenteEjemplo.propTypes = {
     prop: PropTypes.string.isRequired, //Indica que prop debe ser un string y que sí o sí se debe enviar
     otraProp: PropTypes.number
}
ComponenteEjemplo.defaultProps = {
    otraProp: 28
}
```

## Events [(LINK)](https://es.reactjs.org/docs/events.html)
- En el link dado podremos encontrar toda la documentación de los tipos de eventos que existen, en esta parte del curso estaremos utilizando el "onClick"
```js
 <button onClick={aFunction}>+1</button>

 const aFunction = ()=>{
    //una funcion
}
```

## Hooks
- Los hooks son funciones que se utilizan para cambiar los valores de los estados de un componente

### useState
- Se utiliza en este caso para modificar variables definidas como constantes 
```js
const [counter, setCounter] = useState(0); //Hook inicializado con el nombre counter con valor 0

const increase = () => { //Esta función incrementará en 1 el valor de counter
    setCounter(counter + 1);
};
```
----------

# Test Unitarios
- Para correr los test unitarios utilizaremos el siguiente comando:
```terminal
$ npm run test
```

## Jest [(LINK)](https://jestjs.io/)
- Es el framework que se utiliza por defecto cuando se crean los proyectos con npx create-react-app para realizar pruebas unitarias

### expect().toBe()
- El expect toBe se utiliza para verificar que un elemento tenga un valor determinado
Ejemplo:
```js
test('Los strings deben ser iguales', () => {
    const unString = 'Hola Mundo';

    expect(unString).toBe('Hola Mundo'); //El expect().toBe() es igual que utilizar el ===
})
```

### expect().toEqual()
- Es como el expect toBe pero para verificar objetos

```js
test('probando getUser()', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const userTest = getUser(user);
        expect(userTest).toEqual(user);
    });
```

### Test con tareas asíncronas 
- Se debe enviar el argumento done en el callback de test para indicar que tiene tareas asyncronas y haga un await automático en las mismas.
- Se debe llamar a la funcion done una vez que terminamos de hacer el test
```js
test('prueba con async y encontrarlo', (done) => { 
        const id = 1;
        const hero = getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done(); //llamamos a la funcion done para terminar
            });
        
    });
```

### Test con async-await (Recomendado)
-- Podemos utilizar esta forma tanto para tareas con async-await y con promesas
```js
test('prueba con async y encontrarlo', async () => {
        const id = 1;
        const hero = await getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
            });
        
    });
```
### Test sobre componentes de React

## Enzyme [(LINK)](https://enzymejs.github.io/enzyme/)
- Es una librería que se utiliza para realizar test de componentes html
Instalación:
```terminal
$ npm i --save-dev enzyme enzyme-adapter-react-16
$ npm install --save-dev enzyme-to-json
```

- vamos a necesitar tener en la carpeta raíz del proyecto un archivo setupTests.js con lo siguiente:
```js 
//setupTests.js
//import '@testing-library/jest-dom/extend-expect'; //Este es el que viene por defecto con create-react-app (No lo vamos a usar)
import "@testing-library/jest-dom"; //Para utilizar funciones como toMatchSnapshot
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json'; //Para utilizar el toMatchSnapshot

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); 

Enzyme.configure({ adapter: new Adapter() });
```

### Shallow 
- Es una función de la librería Enzyme que nos provee de pruebas para simular clicks, o validar el querySelector, etc. 

Ejemplo completo de pruebas utilizando Enzyme:[(LINK)](https://github.com/ArakakiAriel/react-for-dummies/blob/master/03-counter-app/src/test/CounterApp.test.js)

- __Nota:__ Cuando utilicemos el toMatchSnapshot(); nos va a dar un error la primera vez cuando corramos las pruebas, nos va a pedir crear las snapshots y para eso vamos a la consola y apretamos la tecla (u) para crearlas. Esto nos va a crear una carpeta __ snapshots__ 


----------


# Contenido Extra

- PWA: [GoogleDevelopers - PWA](https://developers.google.com/web/ilt-}/pwa)
- React scripts: [link](https://create-react-app.dev/docs/available-scripts/)

- Para comentar una linea en VsCode si está en teclado ESP es "ctrl + }"
