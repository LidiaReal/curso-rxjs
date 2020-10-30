import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(100);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: valor => console.log('next', valor),
    complete: () => console.log('complete')
});