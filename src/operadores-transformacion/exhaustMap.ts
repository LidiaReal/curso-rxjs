import { interval, fromEvent } from 'rxjs';
import { exhaustMap, take, tap } from 'rxjs/operators';


const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent(document, 'click');

// si hacemos 3 clicks seguidos, pero solo emite el primero
click$.pipe(
    tap( () => console.log('click') ),
    exhaustMap( () => interval$ )
).subscribe( console.log );
