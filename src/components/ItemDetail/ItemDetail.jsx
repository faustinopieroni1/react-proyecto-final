import Contador from "../Contador/Contador"

function ItemDetail({producto}) { //---> Traigo "producto" desde IDC como propiedad para aplicar .nombre, .precio, .categoria con {destructuring}

    return (

        <div className="container border border-3 border-primary rounded d-flex flex-row">
            <div className="row">
                <div className="col">
                    <h3>Nombre: {producto.nombre}</h3>
                    <h3>Categoria: {producto.categoria}</h3>
                    <h3>Precio: {producto.precio}</h3>
                </div>
            </div>

            <div>
                <Contador producto={producto}/>
            </div>

        </div>

    )
}

export default ItemDetail