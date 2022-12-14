import { useEffect } from "react"
import { useState } from "react"

import Contador from "../Contador/Contador"
import ItemDetail from "../ItemDetailContainer/ItemDetail"

import "./ItemDetailContainer.css"

let producto = { id: 1, name: 'Proteina', descripcion: 'Vainilla', stock: 20 }

function ItemDetailContainer() {

    let [data, setData] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {

        let getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 3000)
        })

        getData.then((resolve) => { setData(resolve) })
        getData.finally(() => { setLoading(false) })
    }, [])

    return (
        <>

            {
                loading ? <h2>Cargando...</h2>
                    : <ItemDetail data={data} />

            }

            <div>
                <Contador />
            </div>
            
        </>
    )
}

export default ItemDetailContainer