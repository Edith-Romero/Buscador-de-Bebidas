import React, { useContext,useState } from 'react'
import { CategoriasContext  } from '../Context/CategoriasContext';
import {RecetasContext} from '../Context/Recetas.Context'

const Formulario = () => {

    const [busqueda,setbusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas,setConsultar} = useContext(RecetasContext);

    // funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        setbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form 
            className="col-12"
            onSubmit={ e=> {
                e.preventDefault();
                buscarRecetas(busqueda)
                setConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>
                    Buscar bebidas por Categoria o Ingrediente
                </legend>
            </fieldset>
            <div className="row mt -4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">--Selecciona Categoria-</option> 
                        {categorias.map (categoria =>(
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}       
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;