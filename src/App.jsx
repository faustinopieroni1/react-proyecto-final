//Aca se puede escribir en js


//IMPORTS (Respetando jerarquias)
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import CartCheckOutContainer from './containers/CartCheckOutContainer/CheckOutContainer';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CartContextProvider from './context/CartContext';






function App() {  //---> Es un componente "CONTENEDOR", no es buena practica escribir aca las funciones, hay que traerlas modularizadas de "components"  



  //Variables que se usaran de valor en las prop.
  let saludo = 'Bienvenido'

  return (
    /* Todo lo que se escriba aca, sera en jsx */

    <> {/* "frag" = "div"*/}

      <CartContextProvider> {/* los componentes pasan a ser hijos del provider y se en cuentran en "children" */}

        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={saludo} />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />  {/* los ":" permiten que la ruta sea dinamica almacenando el contenido en "string" */}
            <Route path='/detalle/:productoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkOut' element={<CartCheckOutContainer />} />
            <Route path='*' elementent={<Navigate to='/' />} /> {/* para cualquier ruta que no exista */}
          </Routes>

        </BrowserRouter>

      </CartContextProvider>


    </>

  )
}

export default App

