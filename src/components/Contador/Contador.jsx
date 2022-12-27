import { useState } from 'react' //--->Funcion que ayuda a persistir "states" (valores de variales)

// La fn() "useState" viene con react. Array de 2 indices, [0 = vlaor inicial] pasado por parametro a "useState" [1 = funcion] cambiara el valor del indice 0

function Contador({ stock = 10 }) {

    let [valor, setValor] = useState(0) // Destructuring array de fn() "useState". "valor" almacena el valor pasado por parametro a "useState"y "cambiarValor" funcion que modificara el valor de "valor"



    //--------------------------

    function handlerResta() {
        if (valor > 1) {
            setValor(valor - 1) //---> "cambiarValor" calmbiara el valor de "valor" en - 1
        }
    }

    function handlerSuma() {
        if (valor < stock) {
            setValor(valor + 1) //---> "cambiarValor" calmbiara el valor de "valor" en + 1
        }
    }

    function handlerRestablecerValor() {
        setValor(valor = 0) //---> "cambiarValor" calmbiara el valor de "valor" en 0

    }



    //--------------------------

    return (
        <div className='card m-5'>

            <div className='card-header text-center'>
                <label> {valor} </label>
            </div>

            <div className='card-body d-flex flex-column'>
                <button className='btn btn-outline-primary' onClick={handlerSuma}>+</button>
                <button className='btn btn-outline-danger' onClick={handlerResta}>-</button>
                <button className='btn btn-outline-secondary' onClick={handlerRestablecerValor}> Reset</button>
            </div>

            <div className='card-footer text-center'>
                <button className='btn btn-outline-success'> Agregar al carrito</button>
            </div>

        </div>
    )
}



export default Contador