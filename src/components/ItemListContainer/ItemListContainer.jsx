//Componente: Es una funcion definida (no llamada aun )
// Se utiliza PascalCase para definir "Componentes"
// Aqui estara la parte visual de los comps


//IMPORTS
import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ItemListContainer({ greeting }) { //--> Nombre de parametro (se le llama "prop") con {destructuring}




    /* console.log(1)
    setTimeout(() => { console.log(2) }, 3000)   //---> Ejemplo de asincrionismo
    console.log(3)
    console.log(4)
 */



    //--------------------------------------------------------------
    //USEEFFECTS: sirven para controlar el ciclo de vida de un componente



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



    //--------------------------------------------------------------
    //PROMESAS

    let productos = [
        { id: 1, name: 'Proteina', descripcion: 'Vainilla', stock: 20 },
        { id: 3, name: 'Aumentadorr', descripcion: 'Chocolate', stock: 20 },
        { id: 4, name: 'Creatina', descripcion: 'Neutra', stock: 20 },
        { id: 5, name: 'Preentreno', descripcion: 'Fruit Punch ', stock: 20 }
    ]

    let gFetch = () => {  //---> Converti la promesa en funcion para pasarle parametros

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                let condition = true; //---> Agregue un setTimeout

                if (condition == true) {
                    resolve(productos) //---> Respuesta de mi promesa ene este caso "resolve", puede devolver Objetos, Arrays, Fn, Etc. Devuleve el array "productos"
                } else {
                    reject('erorr')
                }

            }, 3000) //---> tiempo de demora de ejecucion
        })
    }



    //---------------------------------------------------
    //Persistir los objetos y que no se pierdan usando "USESTATES"



    let [arrayProductos, setProductos] = useState([]) //---> arrayProductos tentra el valor de setProductos que modificara el valor de useState caundo termine la demora del "setTimeout"  el cual esta vacio
    let [loading, setLoading] = useState(true)



    //----------------------------------------------------
    //Resultados de promesas



    useEffect(() => {

        gFetch() // Simulacion de llamada API

            .then((contenidoResolve) => { setProductos(contenidoResolve) }) //--->Capturar el resulatdo RESOLVE  y lo guearda en "setProductos" (fn normal)

            .catch((erorr) => { console.log(erorr) }) //--->Capturar el resulatdo REJECT (fn flecha)

            .finally(() => { setLoading(false) })  //---> Se ejecuta siempre y al ultimo. Cambia el vlaor de "loading" al final de la ejecucion 

    }, []) //---> Se ejecutara solo la primera vez que reenderize el componente ItemListContainer

    console.log(arrayProductos)  //---> Mostrara un array vacio por que el valor de "arrayProductos" esta vacio hasa que se ejecute lo que esta dentro del usEeffect y se llenara el array con resulatdo RESOLVE





    //--------------------------------------------------------------



    return ( //--->Solo 1 elemento que puede contener a otros x eso pongo un "frag"

        <>

            <h3>ItemListContainer</h3>
            <p>{greeting}</p>


            { /* para escapar del jsx */
                loading ? <h2>cargando...</h2> //---> si "loading" es true
                    : productos.map((contenidoProductos) =>

                        <Card className='mt-3' style={{ width: '18rem' }} key={contenidoProductos.id}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{contenidoProductos.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Detalle del Producto</Button>
                            </Card.Body>
                        </Card>) //---> Cuando "loading" sea falso
            }


        </>
    )
}

export default ItemListContainer