import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/*
    Creamos un observable con range para que emita números del 1 al 5
    y con el operador map multiplicamos cada salida por 10.
*/
range(1, 5).pipe(
    // indicamos que entrará un número y emitirá un número
    map<number, number>( valor => valor * 10 )
)
.subscribe( console.log );

/*
    Creamos un observable con fromEvent para que al pulsar una tecla en el DOM, en la
    consola aparezca solo la tecla y no todo el event.
*/
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe(
    map( event => event.key )
);

keyupCode$.subscribe( valor => console.log('map', valor) );