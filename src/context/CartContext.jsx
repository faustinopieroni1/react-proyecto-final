import { useState } from "react";
import { createContext } from "react";



let CartContext = createContext([])


function CartContextProvider({children}) {

    //estado del CartList 

    let[cartList, setCartList]= useState([])

    //fincion q modifica el CartList

    return (
        <CartContext.Provider value={{cartList}}>

            {children} {/* muestra todos los componentes dentro del provider */}

        </CartContext.Provider>
    )
}
export default CartContextProvider