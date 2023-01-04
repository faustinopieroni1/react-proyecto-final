import { useState } from "react"
import { Link } from "react-router-dom"



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
            <Link to={'/cart'}>
                <button className="btn btn-outline-primary">
                    Ir al carrito
                </button>
            </Link>

            <Link to={'/'}>
                <button className="btn btn-outline-primary">
                    Seguir comprando
                </button>
            </Link>

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
                    <ButtonAddToCart handlerButtonTypeChanger={handlerButtonTypeChanger} /> /* Le paso la fincion como parametro */
                    :
                    <InButtonAddToCart />
            }

        </div>
    )
}

export default ChangerButton