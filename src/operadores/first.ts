import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>( console.log ),
    map( ({clientX, clientY}) => ({clientY, clientX}) ),
    first( event => event.clientY >= 150 )
)
.subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete')
});