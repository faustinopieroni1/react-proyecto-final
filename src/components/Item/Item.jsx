import { Link } from "react-router-dom"


function Item({ propiedadesProductos }) {

    return (


        <div className="card w-100 mt-5" >

            <div className="card-header">
                {`${propiedadesProductos.nombre} - ${propiedadesProductos.categoria}`}
            </div>

            <div className="card-body">
                <img src="" alt="" />
                {propiedadesProductos.precio}
            </div>

            <div className="card-footer">
                <Link to={`/detalle/${propiedadesProductos.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        Detalle del Producto
                    </button>
                </Link>
            </div>

        </div>

    )

}

export default Item