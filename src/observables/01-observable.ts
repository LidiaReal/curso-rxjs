import { Observable, Observer } from 'rxjs';

// Observer es una interfaz, nos obligará a marcar todo lo necesario
// para que sea un observer
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
};

// Creación de un observable donde fluye información de tipo string:
const obs$ = new Observable<string>( subs => {
    subs.next('Valor emitido 1');
    subs.next('Valor emitido 2');

    subs.complete();
    
    subs.next('Valor emitido 3');
});

obs$.subscribe(observer);

// Subscripción al observable anterior
// obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );
