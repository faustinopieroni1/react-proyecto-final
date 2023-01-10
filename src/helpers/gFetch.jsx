let productos = [
    {  id: '1', nombre: 'Proteina', categoria: 'Suplementos', precio: '$130' },
    {  id: '2', nombre: 'Creatina', categoria: 'Suplementos', precio: '$20' },
    {  id: '3', nombre: 'Preentreno', categoria: 'Suplementos', precio: '$55'},
    {  id: '4', nombre: 'Aumentador', categoria: 'Suplementos', precio: '$70' },
    {  id: '5', nombre: 'Shaker Premium', categoria: 'Accesorios', precio: '$130' },
    {  id: '6', nombre: 'Shaker Basico', categoria: 'Accesorios', precio: '$20' },
    {  id: '7', nombre: 'Guantes Basios', categoria: 'Accesorios', precio: '$55'},
    {  id: '8', nombre: 'Guantes con Muñequeras', categoria: 'Accesorios', precio: '$70' },
    {  id: '9', nombre: 'Cinturon de Cuero', categoria: 'Accesorios', precio: '$230' }
]


export const gFetch = () => {  //---> Converti la promesa en funcion para pasarle parametros y exportarla

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let condition = true; //---> Agregue un setTimeout
            if (condition == true) {
                resolve(productos) //---> Respuesta de mi promesa ene este caso "resolve", puede devolver Objetos, Arrays, Fn, Etc. Devuleve el array "productos"
            } else {
                reject('erorr')  //---> Como es un simulador nunca me devolvera reject a menos que se lo pombre
            }

        }, 1000) //---> tiempo de demora de ejecucion
    })
}

