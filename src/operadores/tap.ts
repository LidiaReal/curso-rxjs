import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

// con el operador tap podemos saber que valor hay antes de aplicar 
// el operador map y que valor habrá después de aplicar el operador map
numeros$.pipe(
    tap( x => console.log('antes', x) ),
    map( valor => valor * 10),
    tap({
        next: valor => console.log('después', valor),
        complete: () => console.log('Fin')
    }) 
)
.subscribe( valor => console.log('subs', valor) );


