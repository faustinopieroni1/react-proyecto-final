//Aca se puede escribir en js


//IMPORTS (Respetando jerarquias)
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import CartCheckOutContainer from './components/CartCheckOutContainer/CheckOutContainer';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'






function App() {  //---> Es un componente "CONTENEDOR", no es buena practica escribir aca las funciones, hay que traerlas modularizadas de "components"  



  //Variables que se usaran de valor en las prop.
  let saludo = 'Bienvenido'

  return (
    /* Todo lo que se escriba aca, sera en jsx */

    <> {/* "frag" Igual a un div , se usa en los returns*/}

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={saludo} />} />
          <Route path='/detalle/:productoId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkOut' element={<CartCheckOutContainer />} />

          {/* para cualquier ruta que no exista */}

          <Route path='*' elementent={<Navigate to='/' />} />

        </Routes>

      </BrowserRouter>

    </>

  )
}

export default App

