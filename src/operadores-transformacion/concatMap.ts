import { interval, fromEvent } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';


const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent(document, 'click');

// si hacemos 3 clicks seguidos, primero acabará el 
// primer intervalo, seguirá con el segundo...
click$.pipe(
    concatMap( () => interval$ )
).subscribe( console.log );
