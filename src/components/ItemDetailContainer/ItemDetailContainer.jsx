import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { gFetch } from "../../helpers/gFetch"
import Contador from "../Contador/Contador"

import "./ItemDetailContainer.css"




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

            <div className="container border border-3 border-primary rounded">
                <div className="row">
                    <div className="col">
                        <h3>Nombre: {producto.nombre}</h3>
                        <h3>Categoria: {producto.categoria}</h3>
                        <h3>Precio: {producto.precio}</h3>
                    </div>
                </div>
            </div>

            <div>
                <Contador />
            </div>

        </>
    )
}

export default ItemDetailContainer