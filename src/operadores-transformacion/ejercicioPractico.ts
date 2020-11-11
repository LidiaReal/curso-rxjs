import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';

/* 
    EJERCICIO PRÁCTICO para ver las diferencias entre los operadores
    mergeMap, switchMap y exhaustMap.
    Se utiliza fake data de: https://reqres.in/ para simular peticiones HTTP
*/

// helper
const peticionHttpLogin = ( userPass ) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
        pluck('response', 'token'),
        catchError( error => of('Token no válido') )
    )
}

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones 
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit' ).pipe(
    tap( event => event.preventDefault() ),
    map( event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    // mergeMap( peticionHttpLogin )
    // switchMap( peticionHttpLogin )
    exhaustMap( peticionHttpLogin )
);

submitForm$.subscribe( token => {
    console.log(token)
});