import { useState } from "react"
import { Link } from "react-router-dom"



//INTERCAMBIABILIDAD

// Componente "ButtonAddToCart"
function ButtonAddToCart({ ButtonTypeChangerMostrarCantidadProductos }) {



    return (
        <>
            <button className='btn btn-outline-success' onClick={ButtonTypeChangerMostrarCantidadProductos} > Agregar al carrito</button>
            {/* Al hacer click se ejecutara "ButtonTypeChangerMostrarCantidadProductos" */}
        </>
    )
}

// Componente "InButtonAddToCart"
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

function ChangerButton({ valor }) {



    let [buttonType, setButtonType] = useState('ButtonAddToCart')

    function ButtonTypeChanger() {  //---> "handler" xq no se ejecuta automaticamente ! cuando sucede el evento
        setButtonType('InAddToCart')
    }

    function MostrarCantidadProductos() {
        console.log(valor)
    }

    function ButtonTypeChangerMostrarCantidadProductos() {
        ButtonTypeChanger()
        MostrarCantidadProductos()
    }


    return (
        <div>

            {
                buttonType == 'ButtonAddToCart' ?
                    <ButtonAddToCart ButtonTypeChangerMostrarCantidadProductos={ButtonTypeChangerMostrarCantidadProductos} />
                    /* Le paso la funcion como parametro */
                    :
                    <InButtonAddToCart />
            }

        </div>
    )
}

export default ChangerButton