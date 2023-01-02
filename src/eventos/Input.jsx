//Eventos con react

function Input() { //---> No deja escribir vocales


    /* function inputHandler(evento) {
        console.log(evento.nativeEvent)  //---> .nativeEvent sirve para acceder a la info del evento
    } */


    /* function inputHandler2(evento) {

        let vocales=['a','e','i','o','u']

        if (vocales.includes(evento.key)) {

            evento.preventDefault() //---> .preventDefault cancela la funcion de algunos eventos 
            console.log(evento.key) //---> .key muestra lo que se ingresa en el input
        }

    } */

    function inputHandler2(evento) {
        if (
            evento.key == 'a' ||
            evento.key == 'e' ||
            evento.key == 'i' ||
            evento.key == 'o' ||
            evento.key == 'u') {
            evento.preventDefault() //---> .preventDefault cancela la funcion de algunos eventos
            console.log(evento.key) //---> .key muestra lo que se ingresa en el input
        }
    }



    return (
        <div className="mt-5">
            <input type="text" placeholder="(:" onKeyDown={inputHandler2} />
        </div>
    )
}

export default Input


/* (evento.key == 'a' || evento.key == 'e' || evento.key == 'i' || evento.key == 'o' || evento.key == 'u') */