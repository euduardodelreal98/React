//EL siguiente codigo es un ejemplo de una clase en js sin usar el 'azucar sibtaxico de la palabra class en las clases'
//el codigo de abajo es la principal funcionalidad que tienen las funciones en js
//lo anterior solo aplica a funciones que se declaran  con la palabra reseervada function
//En js la palabra resrvada this se refiere al objeto al que pertenece. su valor depende de donde se utilice


function fn()
{
    this.prop = 'propiedad';
}

fn.prototype.lala = function funcionPrototipo(){}
const r = new fn();
console.log(r.__proto__);

// Fat arrow functions: estas funciones no pueden ser llamadas con la palabra resrvada new
//Dentro de las fat arrow functions no existe el contexto de this!!!!!!
const fatfn = () =>
{
    this.prop = 'propiedad';
    return this;
}

const r1 = fatfn();
console.log(r1);

//Return implicito en las fat arrow function
const fnr = () => 2;
console.log(fnr());

console.log(r1);