import { of } from 'rxjs';

const obs$ = of<number>(1,2,3,4,5,6);

// se pueden envíar cualquier tipo de datos: array, funciones, promesas...
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Secuencia acabada')
);
console.log('Fin del Obs$');