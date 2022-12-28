import { Link } from "react-router-dom"
import Item from "../Item/Item"


function ItemList({ producto }) {

    return (
        producto.map((propiedadesProductos) =>

            <Item propiedadesProductos={propiedadesProductos} key={propiedadesProductos.id} />

        )
    )

}

export default ItemList