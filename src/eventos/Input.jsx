//Eventos con react

function Input() {

    function inputHandler(evento) {
        console.log(evento.nativeEvent)  //---> .nativeEvent sirve para acceder a la info del evento
    }

    function inputHandler2(evento){
        console.log(evento.key) //---> .key muestra las lo que se ingresa en el input
    }



    return (
        <div className="mt-5">
            <input type="text" placeholder="(:" onKeyDown={inputHandler2} /* onClick={inputHandler} */ /> 
        </div>
    )
}

export default Input