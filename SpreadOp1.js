//Los spread operators hacen copias de los originales.Es decir los originales no seran afecatados

let fn = (a,b,c) => console.log(a, b, c);
let arr = [1,2,3,4];

//fn(arr[1], arr[2], arr[3]);
fn(...arr);

let arr1 = [5,6];

//let arr2 = arr.concat(arr1)
//let arr2 = [...arr, ...arr1]

let arr2 = [...arr, 2,3];
console.log(arr2);
arr[0] = 'Chanchito xD';
console.log(arr,arr2);

//**Spread operators 2 apra objetos */
let obj1 = {a:1, b:2}
let obj2 = {b:5, c:'El laloxD'}

let obj3 = {...obj1}
obj1.a = 10
//console.log(obj3, obj1);

const obj4 ={...obj1, obj2}
console.log(obj4)

const obj5 = {
    ...obj1,
    loading:true,
    data:{
        prop:'lala',
        animal:'perrito'
    }
}

console.log(obj5)






