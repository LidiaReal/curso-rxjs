import { fromEvent } from 'rxjs';
import {  mapTo } from 'rxjs/operators';

/*
    Creamos un observable con fromEvent para que al pulsar una tecla en el DOM, en la
    consola aparezca solo la tecla y no todo el event.
*/
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupMapTo$ = keyup$.pipe(
    // se pueden regresar strings, numeros, objetos...
    mapTo<KeyboardEvent, string>('Tecla pulsada')
);

keyupMapTo$.subscribe( valor => console.log('mapTo', valor) );
