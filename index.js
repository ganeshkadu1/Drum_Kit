var numberOfDrum = document.querySelectorAll(".drum").length
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");


document.querySelector(".w").addEventListener("click",tom1Play); 
document.querySelector(".a").addEventListener("click",tom2Play);
document.querySelector(".s").addEventListener("click",tom3Play);  
document.querySelector(".d").addEventListener("click",tom4Play);
document.querySelector(".j").addEventListener("click",snarePlay);
document.querySelector(".k").addEventListener("click",crashPlay);
document.querySelector(".l").addEventListener("click",kickPlay);

function tom1Play() {
    tom1.play();
}

function tom2Play() {
    tom2.play();
}

function tom3Play() {
    tom3.play();
}


function tom4Play() {
    tom4.play();
}

function snarePlay() {
    snare.play();
}

function crashPlay() {
    crash.play();
}

function kickPlay() {
    kick.play();
}