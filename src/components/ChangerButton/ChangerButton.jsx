import { useState } from "react"



//INTERCAMBIABILIDAD

function ButtonAddToCart({ handlerButtonTypeChanger }) {
    return (
        <>
            <button className='btn btn-outline-success' onClick={handlerButtonTypeChanger}> Agregar al carrito</button>
            {/* Al hacer click se ejecutara "handlerButtonTypeChanger" */}
        </>
    )
}


function InButtonAddToCart() {
    return (
        <>

            <button className="btn btn-outline-primary">
                Ir al carrito
            </button>

            <button className="btn btn-outline-primary">
                Seguir comprando
            </button>

        </>
    )
}



//-----------------------------------------------------------------------------------

function ChangerButton() {

    let [buttonType, setButtonType] = useState('ButtonAddToCart')

    function handlerButtonTypeChanger() {
        setButtonType('InAddToCart')
    }



    return (
        <div>

            {
                buttonType == 'ButtonAddToCart' ?
                    <ButtonAddToCart handlerChanger={handlerButtonTypeChanger} /> /* Le paso la fincion como parametro */
                    :
                    <InButtonAddToCart />
            }

        </div>
    )
}

export default ChangerButton