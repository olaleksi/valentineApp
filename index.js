const yes = document.getElementsByClassName("yes");
const no = document.getElementsByClassName("no");
const answerContainer = document.getElementsByClassName("answer-container");
const gifContainer = document.getElementsByClassName("gif-container");
const tomi = document.getElementsByClassName("tomi");
const teddyIcon = document.getElementsByClassName("teddy-icon");



function handleYes() {
    answerContainer[0].classList.add("hidden");
    gifContainer[0].classList.remove("hidden");
    tomi[0].classList.add("hidden");
    teddyIcon[0].classList.add("hidden");
} 

function handleNo() {
    no[0].classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => {
        no[0].classList.remove("animate__animated", "animate__shakeX");
    }, 1000);
}