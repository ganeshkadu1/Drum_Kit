var numberOfDrum = document.querySelectorAll(".drum").length

for(var i=0; i < (numberOfDrum);i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
