import { interval, timer } from 'rxjs';

const observer = {
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete'),
}

// const interval$ = interval(1000);

// console.log('Inicio');
// interval$.subscribe(observer);
// console.log('Fin');

// Emite solo el 0 en 2 segundos
// const timer$ = timer(2000); 

// Inicia la secuencia cuando pasen 2s, y cada 1s emite un valor
// const timer$ = timer(2000, 1000); 

// Aquí indicamos que se ejecute en la fecha actual + 5 segundos
const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const timer$ = timer( hoyEn5 ); 
timer$.subscribe(observer);



