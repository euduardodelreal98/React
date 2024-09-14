//Metodo filter: nos regresa un arreglo que tiene la misma o menor longitud que el arreglo inicial simepre y cuando
// lo que estemos evaluando nos regrese un true, en caso de ser false, no nos regresa esos elementos
// Este metodo se utiliza cuando queremos filtrar contenido o cuando existan elementos que no queremos mostrar
// al usuario se agrega un  nevo comentario

//ejepmlo:

// const arr = [5,1,2,3,4]

// const r = arr.filter((el,i) => 
// {
//     console.log(i)
//     return el>2
// })
// console.log(r)

//Metodo map: este metodotoma todos los elementos que se encuentran dentro de un arreglo y les aplica una funcion
//devuleve un arreglo de la misma longitud pero con una funcion aplicada a cada una de los elemntos
//este metodo es de suma importancia ya que se utiliza mucho cen react cuando nosotros querramos imprimir valores

//ejemplo1:
// const arr = [5,1,2,3,4]
// const mapped = arr.map( (el) => `<h1>${el}<h1>`)
// console.log(mapped)

//ejemplo2:
// const users = [
//     {id:1, name:'Eduardo'},
//     {id:2, name:'Alex'},
//     {id:3, name:'Andy'},
//     {id:4, name:'Papa'},
//     {id:5, name:'Mama'},
// ]
// const mapped = users.map( (user) => `<h1>${user.name}<h1>`)
// console.log(mapped)

//Metodo reduce: este metodo nos permite tomar todos los elementos de un arreglo y poder devolver lo que querramos

//ejemplo3:
const arr = [5,1,2,3,4,33]

const max = (a,b) => Math.max(a,b)
const r1 = arr.reduce(max, 0)
//const r1 = arr.reduce((acumulador, el) => acumulador + el,0)
console.log(r1)