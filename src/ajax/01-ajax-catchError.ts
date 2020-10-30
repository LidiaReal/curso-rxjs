import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'http://api.github.com/usersXX?per_page=5';

// 1. PETICIONES USANDO FETCH
// const manejaErrores = ( response: Response ) => {
//     if(!response.ok) {
//         throw new Error(response.statusText);
//     }

//     return response;
// }
// fetch: para peticiones HTTP propia de JavaScript, un inconveniente
// es que no se puede cancelar, si mandamos la petición hasta que no
// se complete no se podrá parar.
// n                                         const fetchPromesa = fetch(url);
// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data: ', data) )
//     .catch( err => console.warn('error en usuarios', err) )


// 2. PETICIONES USANDO AJAX
const atrapaError = ( error: AjaxError ) => {
    console.warn('error en: ', error.message);
    return of([]);
}

ajax(url).pipe(
    map( resp => resp.response ),
    catchError( atrapaError )
).subscribe( users => console.log('usuarios: ', users) );

