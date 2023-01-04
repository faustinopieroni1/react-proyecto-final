import Item from "../Item/Item"


function ItemList({ producto }) {

    return (
        <div className="row container-fluid mt-5 mb-5 justify-content-center text-center">
            {
                producto.map((propiedadesProductos) =>

                    <Item propiedadesProductos={propiedadesProductos} key={propiedadesProductos.id} />

                )
            }
        </div>
    )

}

export default ItemList