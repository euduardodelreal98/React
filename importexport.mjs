//*******************************metodo antiguo de como importar y exportar variables**************************


//Importar 1 sola objetos a exportar
//const chanchosFelices = ['chanchito 1', 'chanchito 2', 'chanchito 3'];
//module.exports = chanchosFelices;

//Dos o mas objetos a exportar
// const chanchosFelices = ['chanchito 1', 'chanchito 2', 'chanchito 3'];
// const chanchosTristes = ['chanchito triste 1', 'chanchito triste 2', 'chanchito triste 3'];
// module.exports = {
//     chanchosFelices,
//     chanchosTristes
// };


//*******************************metodo Estandar de como importar y exportar variables**************************
const chanchosFelices = ['chanchito 1', 'chanchito 2', 'chanchito 3'];
const chanchosTristes = ['chanchito triste 1', 'chanchito triste 2', 'chanchito triste 3'];
const otrosChanchos = ['chanchito otro 1', 'chanchito otro 2', 'chanchito otro 3'];
const f1 = () =>{
    console.log('Soy la arrow function');
}

function fn2 ()
{
    console.log('Soy la funcion Fn2');
}

export {chanchosTristes, otrosChanchos, fn2, f1}; 
export default chanchosFelices;






