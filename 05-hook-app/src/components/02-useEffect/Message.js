import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Message = ({email}) => {
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

        window.addEventListener('mousemove',mouseMove);

        return () => { //Acá vamos a indicar qué función va a realizar una vez que el componente Message se desmonte
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>{ email }!</h3>
            <p>X: {x} - Y: {y}</p>
        </div>
    )
}
