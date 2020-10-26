import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur odio et mi elementum, luctus sagittis neque ultrices. Aenean fringilla sit amet nisl vitae tincidunt. Aenean pretium feugiat commodo. Phasellus vitae mi egestas, suscipit est nec, molestie mauris. Nunc non maximus diam, a convallis nulla. Nam porta, mauris at semper imperdiet, libero elit gravida mauris, sit amet imperdiet elit mi ut massa. Fusce elit est, malesuada eget turpis sit amet, suscipit consectetur est. In laoreet, lacus eu convallis venenatis, velit leo vehicula eros, sit amet pulvinar orci metus a sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas a nibh id dolor scelerisque porta. Aliquam erat volutpat.
<br/><br/>
Duis venenatis tortor neque, vitae gravida tellus egestas et. Suspendisse eleifend id diam ut varius. Etiam consectetur eleifend scelerisque. Sed non vestibulum neque. Etiam sed viverra est. Quisque urna ante, faucibus nec congue id, lobortis et ipsum. Ut vehicula, dolor eu molestie cursus, risus elit rutrum diam, suscipit semper sem arcu nec erat. Donec id est in leo luctus maximus. Cras a tempor nisi. Proin dictum, leo eu euismod molestie, ante orci ornare turpis, quis commodo leo est et dolor. Nulla vehicula justo tellus, quis congue dolor convallis vel. Phasellus convallis cursus magna. In hac habitasse platea dictumst. Nullam vitae massa iaculis, finibus massa non, bibendum magna. Vivamus varius urna vel dui pellentesque, a sagittis mauris iaculis.
<br/><br/>
Phasellus id turpis purus. In euismod dictum risus, vel mattis risus eleifend eget. Aenean pulvinar vel nunc eu maximus. Proin suscipit, est ac pulvinar elementum, velit sapien faucibus nisi, ac ultricies lectus massa non est. Curabitur varius lectus eget ligula placerat convallis. Proin at viverra diam, mollis viverra dolor. Vestibulum porttitor sed diam sed accumsan. Duis efficitur purus ipsum, at euismod eros fringilla ut. Duis fermentum, metus sed venenatis varius, urna orci accumsan turpis, quis congue lectus lectus eu enim. Donec placerat faucibus metus commodo interdum. Cras gravida odio vel massa pulvinar euismod. Maecenas pretium at nisl sed condimentum. Etiam vehicula dui imperdiet tincidunt lacinia. Nunc ut elit volutpat enim luctus molestie. Vivamus dapibus finibus gravida.
<br/><br/>
Aenean lorem sapien, pretium ac magna nec, dictum facilisis sem. Etiam condimentum eros quis orci lobortis venenatis. Curabitur vulputate felis in congue pulvinar. Duis gravida mauris ex, at fermentum dui sagittis id. Donec tincidunt sapien nec quam laoreet venenatis. Nullam id lacus ac nisl euismod pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Aliquam erat volutpat. Quisque a est ac odio fringilla pellentesque eget a purus. Aenean nec rhoncus purus. Aenean facilisis, sapien sit amet ultricies ultrices, eros nunc scelerisque enim, ut pharetra nisl ante at eros. Proin sed ipsum placerat, lacinia nibh et, facilisis tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse tempus, mi at ultrices dapibus, velit ante laoreet lorem, non ultricies erat sapien a massa. Phasellus vulputate consequat gravida. Quisque nec sollicitudin augue, ac rhoncus mauris. In massa ante, scelerisque sit amet mi eget, convallis consequat magna. Nunc et ultrices magna, et placerat sapien. Suspendisse efficitur molestie semper. Quisque pretium lacus magna, vel egestas neque rutrum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// función que haga el cálculo
const calcularPorcentajeScroll = ( event ) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe( console.log ); 

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll(event) ),
    // con tap imprimimos por pantalla el porcentaje para comprobar si es correcto
    tap( x =>  console.log(x) )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
