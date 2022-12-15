//Componente: Es una funcion definida (no llamada aun )
// Se utiliza PascalCase para definir "Componentes"
// Aqui estara la parte visual de los comps


//IMPORTS
import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';





function ItemListContainer({ greeting }) { //--> Nombre de parametro (se le llama "prop") con {destructuring}



    //-------------------------------------------------------------

    //USESTATES: Ideales para cuando queremos que x variable arranque con yn valor dedterminado para luego modificarlo pueden contener [] o {}

    //Persistir los objetos y que no se pierdan usando "USESTATES" ademas permite asignarle un valor inicial, el cual luego de un tiempo dado por un "setTimeOut" cambiara



    //--------------------------------------------------------------

    //USEEFFECTS: sirven para controlar el ciclo de vida de un componente

    //Tipos de USEEFECTS

    /* //Este useEffect de ejecutara siempre que se reenderize el componente
    useEffect(() => {
        console.log(' useEffect que se ejecuta siempre')  // Lo saltea para renderizar primero "ItemListContainer"
    })

    //Este useEffect solo se ejecuta la primera vez que se reenderize el componente
    useEffect(() => {
        console.log(' useEffect que solo se ejecuta la primera vez')  // Ideal para llamar APIS
    }, [])

    useEffect(() => {
        console.log(' useEffect que solo se ejecutacuando cambia el valor de bool')  // 
    }, [bool])
 */



    //---------------------------------------------------

    let [producto, setProducto] = useState([])  //--->Tendra el valor de setProductos que modificara el valor de useState caundo se cumpla la promesa "gFetch" demorada por el "setTimeout" asignado 

    let [loading, setLoading] = useState(true)

    /* console.log(producto) */  //---> Al principio mostrara un [array] vacio, hasta que se cumpla la promesa "gFetch" y el ".then" capture el resultado POSITIVO y lo envie al "setProducto"



    useEffect(() => {
        

        gFetch() //---> Funcion importada, la cual contiene una promesa y ARRAY de los productos

            .then((resolve) => { setProducto(resolve) }) // Gracias al "then" que captura el resultado positivo de la promesa "gFetch" ----> resolve tendra el valor del array del array de productos.

            .finally(() => { setLoading(false) }) //---> Cambiara el valor inicial del useState "loading"


    }, [])



    //--------------------------------------------------------------

    return ( //--->Solo 1 elemento que puede contener a otros x eso pongo un "frag"

        <>

            <h3>ItemListContainer</h3>
            <p>{greeting}</p>


            { /* para escapar del jsx */
                loading ? <h2>cargando...</h2> //---> si "loading" es true
                    : //---> si "loading" es true
                    producto.map((propiedadesProductos) =>


                        <Card className='mt-3' style={{ width: '18rem' }} key={propiedadesProductos.id}>

                            <Card.Img variant="top" src="holder.js/100px180" />

                            <Card.Body>

                                <Card.Title>{propiedadesProductos.nombre}</Card.Title>

                                <Card.Text>{propiedadesProductos.categoria}</Card.Text>

                                <Link to={`/detalle/${propiedadesProductos.id}`}>
                                    <Button variant="primary">Detalle del Producto</Button>
                                </Link>

                            </Card.Body>

                        </Card>) //---> Cuando "loading" sea falso
            }


        </>
    )
}

export default ItemListContainer