//Componente: Es una funcion definida (no llamada aun )
// Se utiliza PascalCase para definir "Componentes"
// Aqui estara la parte visual de los comps


//IMPORTS
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import ItemList from '../../components/ItemList/ItemList';






function ItemListContainer({ greeting }) { //--> Nombre de parametro (se le llama "prop") con {destructuring}



    //-------------------------------------------------------------

    //USESTATES: Ideales para cuando queremos que x variable arranque con yn valor dedterminado para luego modificarlo pueden contener [] o {}

    //Persistir los objetos y que no se pierdan usando "USESTATES" ademas permite asignarle un valor inicial, el cual luego de un tiempo dado por un "setTimeOut" cambiara o tambien puede cambiar con un "re-render"



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


    //--------------------------------------------------

    let { categoriaId } = useParams()  //---> Guardo la info del link "categoriaID" que contendr gracias a los ":" el nombre de que boton estoy tocando



    //---------------------------------------------------

    let [producto, setProducto] = useState([])  //--->Tendra el valor de setProductos que modificara el valor de useState caundo se cumpla la promesa "gFetch" demorada por el "setTimeout" asignado 

    let [loading, setLoading] = useState(true)

    /* console.log(producto) */  //---> Al principio mostrara un [array] vacio, hasta que se cumpla la promesa "gFetch" y el ".then" capture el resultado POSITIVO y lo envie al "setProducto"



    useEffect(() => {

        if (categoriaId) {  //---> "categoriaId" es true (existe gracias a que se paso como parametro del Link por que se entro a "suplementos" o "accesorios")

            gFetch()

                .then((resolve) => { setProducto(resolve.filter(prod => prod.categoria === categoriaId)) })  //---> filter para que solo me renderize los elementos solicitados en el :id

                .finally(() => { setLoading(false) })

        } else {

            gFetch() //---> Funcion importada, la cual contiene una promesa y ARRAY de los productos

                .then((resolve) => { setProducto(resolve) }) // Gracias al "then" que captura el resultado positivo de la promesa "gFetch" ----> "setProducto" tendra el valor de "resolve" que sera array el array de productos.

                .finally(() => { setLoading(false) }) //---> Cambiara el valor inicial del useState "loading"
        }

    }, [categoriaId])



    //--------------------------------------------------------------

    return ( //--->Solo 1 elemento que puede contener a otros x eso pongo un "frag"

        <>


            <div className='text-center'>
                {

                    loading ?
                        <h2>cargando...</h2>
                        :
                        < ItemList producto={producto} />

                }
            </div>



        </>
    )
}

export default ItemListContainer