const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const end = document.querySelector('.end');
const refresh = document.querySelector('.refresh');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump');

    }, 500);
}

refresh.addEventListener("click", function(){
    location.reload();
});;

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //o + serve para transformar o string em number. substitui o Number. ...

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
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