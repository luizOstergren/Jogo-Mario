const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const end = document.querySelector('.end');
const refresh = document.querySelector('.refresh');
const counter = document.querySelector('counter');
let count = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}

refresh.addEventListener("click", function () {
    location.reload();
});

// const placar{
//   let  pontuacao = 0;

//     atualiza() => {
//         const intervaloDeFrames = 10;
//         const passouIntervalo = frames % intervaloDeFrames === 0;

//         if (passouIntervalo) {
//             placar.pontuacao = placar.pontuacao + 1;
//         }
//     }
//     return placar;
// }


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //o + serve para transformar o string em number. substitui o Number. ...
// console.log(pipePosition);
    document.getElementById("counter").innerHTML = count;
    if (pipePosition >= 105 && pipePosition <= 110) {  // colocar um valor === mas nao ta fucnionanmdo muito bem. poderia ser pelo tempo ja que o objeto passa pelo mesmo tempo.
        count = count + 1;
        // console.log(count);
        document.getElementById("counter").innerHTML = count;
        
    } // pode botar um break 


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './assets/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        end.classList.remove('hidden')
    }
}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);