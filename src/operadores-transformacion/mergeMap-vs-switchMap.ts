import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // mergeMap( () => interval$ ) // mantiene todas las subscripciones abiertas a la vez
    switchMap( () => interval$ ) // solo mantiene una subscripción a abierta a la vez
).subscribe( console.log );