'use strict';
let Go =true;
let playerX = 40;
let playerY = 200;
let playerDirY = 0;
let playerDirX = 0;
let playerSpeed = 5;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createPlayer() {

    let coin = document.createElement("DIV");

    coin.classList.add("coin");
    coin.classList.add('vis');
    coin.classList.remove('unvis');

    document.body.appendChild(coin);

    return coin;
}

let Coin = [30];
let CoinY = [30];
let CoinX = [30];
let coin = [30];

for (let i = 0; i < 30; i++) {
    coin[i] = createPlayer();
    Coin[i]=true;
    CoinY[i]=getRandomInt(screen.height-340);
    CoinX[i]=getRandomInt(screen.width-440);
    coin[i].style.top=CoinY[i]+'px';
    coin[i].style.left=CoinX[i]+'px';
}


function game() {

    playerY += playerDirY * playerSpeed;

    playerX += playerDirX * playerSpeed;

    console.log(screen.width)
    if(playerX<0)
        playerX=0;
    else if(playerX>screen.width-400)
        playerX=screen.width-400;
    if(playerY<0)
        playerY=0;
    else if(playerY>screen.height-300)
        playerY=screen.height-300;
    if(Go)
    {
        hero.style.top = playerY + 'px';

        hero.style.left = playerX + 'px';
    };

    for (let i = 0; i < 30; i++) {
        if(CoinX[i]-playerX<30&&CoinX[i]-playerX>-30&&CoinY[i]-playerY<30&&CoinY[i]-playerY>-30&&Coin[i]==true)
        {
            a6.innerHTML=parseInt(a6.innerHTML)+1;
            coin[i].classList.remove('vis');
            coin[i].classList.add('unvis');
            Coin[i]=false;
        }
    }

    requestAnimationFrame(game);
}

document.addEventListener('keydown', function(e)
{
    if (e.key === "ArrowUp")
    playerDirY = -1;

    if (e.key === "ArrowDown")
    playerDirY = 1;

    if (e.key === "ArrowRight")
    playerDirX = 1;

    if (e.key === "ArrowLeft")
    playerDirX = -1;
});

document.addEventListener('keyup', function(e)
{
    playerDirY = 0;
    playerDirX = 0;
});

let pone=document.body.querySelector(".one");

one.addEventListener("click", function(e){
    pone.remove();
});

let ptwo=document.body.querySelector(".two");

two.addEventListener("click", function(e){
    ptwo.remove();
});

let pthree=document.body.querySelector(".three");

three.addEventListener("click", function(e){
    pthree.remove();
});
let pfour=document.body.querySelector(".four");
four.addEventListener("click", function(e){
    game();
    pfour.remove();
});


let timerId = setInterval(function() {
    t6.innerHTML=parseInt(t6.innerHTML)-1;
}, 1000);
setTimeout(function() {
    Go=false;
    
    clearInterval(timerId);
}, 30000);