import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

// Ejemplo 1
const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap( letra => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete')
})

// Ejemplo 2
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ))
) .subscribe(console.log);
