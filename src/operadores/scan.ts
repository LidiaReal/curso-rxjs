import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];
const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe( valor => console.log('reduce', valor) );

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
.subscribe( valor => console.log('scan', valor) );

// OTRO USO DEL SCAN
// Redux: manejar el estado global de la app en un objeto
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'lreal', autenticado: false, token: null},
    {id: 'lreal', autenticado: true, token: 'ABC'},
    {id: 'lreal', autenticado: true, token: 'ABC123'},
];

const state$ = from(user).pipe(
    scan<Usuario>( (acc, curr) => {
        return { ...acc, ...curr }
    }, { edad: 33 })
); 

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );
