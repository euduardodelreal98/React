//Hoisting: esto es cuando tomamos varibles definidas con var y funciones definidas con function y las
// lleva al comienzo del archivo
// clases declaradas con class no tienen hoisting
//Metodos estaticos: son aquellos que solamente se peude acceder a ellos a traves de la clase y no es necesario 
//instanciar una clase
//Los metodos estaricos no pueden acceder a las propiedades de una clase, a menos que estas rpopiedades esten 
//declaradas con: 'static estatico = 42'

//Ejemplo1
class Rectangulo{

}
function cuadrado(){}
console.log(Rectangulo, cuadrado);

//Ejemplo2
class chancho
{
    //con el numeral se indican que son propiedades de tipo provada
    #PropPrivada = false;
    constructor(estado = 'feliz')
    {
        console.log('ssssssssssss',this.#PropPrivada);
        this.estado = estado;
    }

    hablar()
    {
        console.log('soy un cochinito ' + this.estado);
    }

    static comer()
    {
        console.log('Comer');
    }
}

chancho.comer();
let feliz = new chancho('feliz');
feliz.hablar();
let triste = new chancho('triste');
triste.hablar();
let feliz1 = new chancho();
feliz1.hablar();
