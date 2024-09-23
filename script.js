console.log("Welcome to tic-tac-toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"
let isover = false;
let isMusicPlaying = false;


const changeturn = () =>{
    return turn === "X" ? "0" : "X"
}

const win = ()=>{
let boxtext = document.getElementsByClassName('boxtext');
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== '')){
    document.querySelector('.info').innerHTML = "Won" ;
    isover = true;
    gameover.play();
    }
    })}
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (!isMusicPlaying) {
            music.play(); // Play music after first click
            isMusicPlaying = true;} // Set flag to avoid replaying
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeturn();
            audioturn.play();
            win();
            if(!isover){
            document.getElementsByClassName("info").innerHTML = "Turn for " + turn;
             } }
    }
    )
})

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => { 
        element.innerHTML=""
    });
})

 