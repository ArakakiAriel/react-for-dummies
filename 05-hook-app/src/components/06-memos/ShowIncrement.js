import React from 'react'

export const ShowIncrement = React.memo(({increment}) => { //Hay que agregarle el React.memo para que memorize también la función hija

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
