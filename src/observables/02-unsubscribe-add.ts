import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;
    const interval = setInterval( () => {
        count++;
        subscriber.next(count);
    }, 1000);

    setTimeout( () => {
        subscriber.complete();
    }, 2500);
    
    // el return se ejecuta después del unsubscribe(), para evitar FUGAS DE MEMORIA
    // cuando hagamos el unsubscribe() limpiamos el intervalo.
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

// nos subscribimos al observable
const subscription1 = intervalo$.subscribe( observer ); 
const subscription2 = intervalo$.subscribe( observer ); 
const subscription3 = intervalo$.subscribe( observer ); 

subscription1.add(subscription2)
             .add(subscription3);

// nos desubscribimos del observable después de 3 segundos, el observador no verá
// más valores emitidos del observable, pero el observable seguirá emitiendolos
// habrá lo que se conoce como FUGA DE MEMORIA
setTimeout( () => {
    subscription1.unsubscribe()
    // subscription2.unsubscribe()
    // subscription3.unsubscribe()
    console.log('Completado timeout');
}, 3000);

