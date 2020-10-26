import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

/*
    Creamos un observable con fromEvent para que al pulsar una tecla en el DOM, en la
    consola aparezca solo la tecla y no todo el event.
*/
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// Ejemplo con map
// const keyupCode$ = keyup$.pipe(
//     map( event => event.key )
// );

// Ejemplo con pluck
const keyupPluck1$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('key')
);

// Ejemplo con pluck para obtener el valor de una propiedad anidada en el objeto
// propiedad: target - baseURI
const keyupPluck2$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')
);

// keyupCode$.subscribe( valor => console.log('map', valor) );
keyupPluck1$.subscribe( valor => console.log('pluck 1', valor) );
keyupPluck2$.subscribe( valor => console.log('pluck 2', valor) );