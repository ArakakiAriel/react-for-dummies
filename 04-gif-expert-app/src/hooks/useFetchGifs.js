import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    
    useEffect( () => {
        getGifs(category).then(async (imgs) =>{
            setTimeout(()=>{
                    
                setState({
                    data:imgs,
                    loading: false
                });
                
            }, 1000)
        }); //Utilizamos el then para que espere a la respuesta de la funcion y luego seteamos las imagenes
          
    }, [category]);
    

    return state
}