const rest = (a,b,c, ...argumentos) =>{
    console.log('Rest; ' +a,b,c)
    console.log(argumentos)
}
rest(1,2,3,4,5,6)

const obj = {
    a:1, b:2, c:3, d:4
}

//Object destructuring se puede solicitar al objeto las propiedades que se queiren obtener
const {a,b, ...restobj} = obj
console.log('Objesct destructurin:' + a,b, restobj)