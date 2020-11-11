import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
import { GithubUser, GithubUsers } from '../interfaces/github-users.interface';


// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500), // espera 500 milesimas de segundo para empezar
    pluck<KeyboardEvent, string>('target', 'value'), // extrae de la propiedad target, el value
    map<string, Observable<GithubUsers>>(texto => {
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        );
    }), // lo convertimos en un ajax JSON y pedimos esa info
    mergeAll<GithubUsers>(), // se subscribe al observable
    pluck<GithubUsers, GithubUser[]>('items') // cuando emita un valor, mostrará la propiedad items
).subscribe(mostrarUsuarios);
