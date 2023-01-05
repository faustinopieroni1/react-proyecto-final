import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { gFetch } from "../../helpers/gFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Input from "../../events/Input"

import "./ItemDetailContainer.css"
import Contador from "../../components/Contador/Contador"




function ItemDetailContainer() {

    let [producto, setProducto] = useState({})
    /*  console.log(producto) */ //---> Al principio mostrara un [objeto] vacio, hasta que se cumpla la promesa "gFetch" y el ".then" capture el resultado POSITIVO y lo envie al "setProducto"

    let { productoId } = useParams()  // ---> Almacena el ":productoId" se debe llamar igual
    /* console.log(productoId) */



    useEffect(() => {
        gFetch()
            .then((resolve) => { setProducto(resolve.find((prod) => prod.id === productoId)) })

    })


    return (
        <>
            <ItemDetail producto={producto} />

            {/* <Input/> */}
        </>
    )
}

export default ItemDetailContainer