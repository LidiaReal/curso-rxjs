import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = ( acumulador: number, valorActual: number) => {
    return acumulador + valorActual; 
}

// reduce de JavaScript:
const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total);

// reduce de RxJS:
interval(1000).pipe(
    // take completa el observable después de la cantidad que se le indique
    take(3),
    reduce( totalReducer ) // si no se manda valor inicial, es 0 por defecto
)
.subscribe({
    next: valor => console.log('next:', valor),
    complete: () => console.log('complete')
});


