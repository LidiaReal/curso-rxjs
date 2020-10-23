import { asyncScheduler, range } from 'rxjs';


// el primer argumento indica en número por donde empieza, 
// el segundo la cantidad de emisiones
const src$ = range(1, 5, asyncScheduler); // asyncScheduler: transforma en asíncrono

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');


