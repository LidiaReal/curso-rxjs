import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

numeros$.subscribe( console.log );