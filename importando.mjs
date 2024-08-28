//*******************************metodo antiguo de como importar y exportar variables**************************
/*

const chanchos = require('./importexport');
console.log(chanchos);
*/

//*******************************metodo Estandar de como importar y exportar variables**************************
import chanchos, {chanchosTristes, otrosChanchos, fn2, f1} from './importexport.mjs';
console.log('chanchoss:' ,chanchos);
console.log('chanchoss Tristess:' ,chanchosTristes);
console.log('chanchoss otros:' ,otrosChanchos);
fn2();
f1();
