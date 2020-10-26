import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// Encadenar operadores (SE EJECUTAN DE ARRIBA A ABAJO): 
// 1. Con map recogemos solo el valor de la tecla pulsada
// 2. Con filter emitimos solo cuando se presione la tecla Enter
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code ),
    filter( value => value === 'Enter' )
);
keyup$.subscribe( console.log );


