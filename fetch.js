const url = 'http://jsonplaceholder.typicode.com/users'

// //El metodo fetch siempre regresa una 'promesa' eso quiere decir que nos va a regresar
// //informacion.
// fetch(url, {
//     method : 'POST',

//     //headers se utiliza para identficar quienes somos y para indicar el tipo de contenido
//     //a mandar
//     headers : {
//         'ContentType' : 'aplication/json',
//         'Authorization' : 'eduardo12345'
//     },

//     // body se utiliza para mandar los datos al servidor analize, cree, acutualize etc.
//     body : JSON.stringify( {
//         name : 'Web site',
//         website: 'google.com'
//     })
// })
//     //then resibe una funcion y se muestra el objeto de respuesta,sirve para identificar
//     //el sts code del seridor
//     .then((response) => response.json)
//     .then(data=>console.log(data))

const fn = async() => {

    const response = fetch(url, {
        method : 'POST',
        headers : {
            'ContentType' : 'aplication/json',
            'Authorization' : 'eduardo12345'
        },
    
        body : JSON.stringify( {
            name : 'Web site',
            website: 'google.com'
        })
    })

    const data = await response.json()
    console.log(data)
}