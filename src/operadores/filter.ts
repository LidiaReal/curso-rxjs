import { range, from } from 'rxjs';
import {  filter } from 'rxjs/operators';

// range(1, 10).pipe(
//     // emite valores pares
//     filter( value => value % 2 !== 1 )
// ).subscribe( console.log );

range(1, 10).pipe(
    // el índice indica el valor que emite el observable sin aplicar ningún operador aún
    filter( (value, index) => {
        console.log('index', index);
        return value % 2 !== 1;
    })
).subscribe( console.log );

const personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Superman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const of$ = from(personajes).pipe(
    filter( value => value.tipo === 'heroe' )
);

of$.subscribe( console.log );


