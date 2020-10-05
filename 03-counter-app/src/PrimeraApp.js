//Nuestra primera functional component
//Generalmente esperamos que devuelva algo de HTML para renderizar en nuestra webpage
import React from 'react';
//import React, { Fragment } from 'react'; //Siempre que utilizemos html en nuestro archivo js debemos importar react
const PrimeraApp = ( {saludo = 'Hola Mundo'} ) => { //Utilizamos desestructuración para poder utilizar directamente el nombre de nuestra propiedad
                        // => = 'Hola Mundo' es el valor por defecto de la prop "saludo" por si no le llega ningun valor.
    //const saludo = 'Hola Mundo';
    const objeto = {
        nombre: 'Kenji',
        edad: 27
    };

    return ( //Utilizar los paréntesis para poder utilizar más de una linea para retornar
        //<Fragment> 
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(objeto, null, 3)}</pre>  */}
            <p>Mi primera aplicación</p>
        </>
        //</Fragment>
    ); // En caso de querer retornar más de un elemento utilizaremos el Fragment para encapsularlos

}

export default PrimeraApp;