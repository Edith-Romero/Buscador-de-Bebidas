import React, {useContext,useState} from 'react'
import { ModalContext } from '../Context/ModalContext';
// Importo el componente de modal solo lo que requiero
import Modal from '@material-ui/core/Modal';
// utilidad para escribir css al estilo javaScript
import { makeStyles } from '@material-ui/core/styles';

// Aca se define la ubicacion del modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;

// Aca se define estilos de apariencia
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    //Configuracion del modal de material-ui con el state retorna los estilos como una pieza de Style
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes =  useStyles();

    const handleOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }

    //Extraer los valores del context
    const {informacion, guardarIdReceta,guardarReceta} = useContext(ModalContext);

    // Muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( informacion[`strIngredient${i}`]){           
                ingredientes.push(
                <li>{informacion[`strIngredient${i}`]} {informacion[`strMeasuare${i}`] }</li>
            )
            }           
        }
        return ingredientes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
                
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                     open={open}
                     onClose={()=>{
                        guardarIdReceta(null);
                        guardarReceta({});
                        handleClose();
                     }}
                    >
                    <div style={modalStyle} className={classes.paper}>
                        <h2>{informacion.strDrink}</h2> 
                        <h3 className="mt-4">Instrucciones</h3>  
                        <p>{informacion.strInstructions}</p> 

                        <img 
                            className="img-fluid my-4" 
                            src={informacion.strDrinkThumb}
                        />
                        <h3>Ingredientes y cantidades</h3>
                        <ul>
                            {mostrarIngredientes(informacion)}
                        </ul>
                    </div> 
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta; 