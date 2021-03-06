import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/Recetas.Context';
import ListaRecetas from './components/ListaRecetas';
import ModalProvider from './Context/ModalContext';


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header/>

          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
            <ListaRecetas/>
          </div>

          </ModalProvider>
        </RecetasProvider>
    </CategoriasProvider>
  );
}
 
export default App;
