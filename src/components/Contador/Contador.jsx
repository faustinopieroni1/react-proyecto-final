import { useState } from 'react' //--->Funcion que ayuda a persistir "states" (valores de variales)

// La fn() "useState" viene con react. Array de 2 indices, [0 = vlaor inicial] pasado por parametro a "useState" [1 = funcion] cambiara el valor del indice 0

function Contador() {

    let [valor, cambiarValor] = useState(0) // Destructuring array de fn() "useState". "valor" almacena el valor pasado por parametro a "useState"y "cambiarValor" funcion que modificara el valor de "valor"

    let [boleano, cambiarValorBoleano] = useState(true)

    


    //--------------------------

    function handlerCambiarValorSuma() {
        cambiarValor(valor + 1) //"cambiarValor" calmbiara el valor de "valor" en + 1
    }

    function handlerCambiarValorResta() {
        cambiarValor(valor - 1) //"cambiarValor" calmbiara el valor de "valor" en + 1

    }

    function handlerRestablecerValor() {
        cambiarValor(valor = 0) //"cambiarValor" calmbiara el valor de "valor" en 0

    }

    function handlerCambiarValorBoleano() {
        cambiarValorBoleano(!boleano) //"cambiarValorBoleano" cambiara el valor de "boleano" al valor contrario al q tenga
        console.log(boleano)
    }

    //--------------------------

    return (
        <div >
            <p>Numero contado componente "Contador" = {valor}</p>
           
            <button className='btn btn-outline-primary' onClick={handlerCambiarValorSuma}>+</button>
            <button className='btn btn-outline-danger' onClick={handlerCambiarValorResta}>-</button>
            <button className='btn btn-outline-secondary' onClick={handlerCambiarValorBoleano}>Cambiar Boleano</button>
            <button className='btn btn-outline-secondary' onClick={handlerRestablecerValor}> Reset</button>

        </div>
    )
}



export default Contador