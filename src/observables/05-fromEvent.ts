import { fromEvent } from 'rxjs';

/*
    Eventos del DOM
*/
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: valor => console.log('next', valor),
};

/*
src1$.subscribe( event => {
    console.log(event.x);
    console.log(event.y);
});
*/

src1$.subscribe( ({ x, y }) => {
    console.log(x,y);
});

src2$.subscribe( event => {
    console.log(event.key);
});