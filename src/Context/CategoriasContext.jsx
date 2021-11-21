import axios from 'axios';
import React, {createContext, useEffect, useState}from 'react';

// Crear el context
export const CategoriasContext = createContext();
 
// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    // Crear el state del context
    const [categorias, setCategorias] = useState([]);

    // Ejecutar el llamado a la API  
    useEffect(()=>{
        const obtenerCategorias = async () => {
            const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    },[]);  
 
    // En este return van a estar los datos y funciones disponible para todos los componentes que lo requieran
    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }                
            }
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;