import React from 'react'

export const Small = React.memo(({value}) => { //La función memo lo que va a hacer es que si el Componente no tuvo algún estado modificado, este no se va a llamar constantemente con cada cambio realizado en un Componente que lo esté llamando

    console.log("Llamando a Smallie")

    return (
        <small> {value} </small>
    )
}
);