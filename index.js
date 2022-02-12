var numberOfDrum = document.querySelectorAll(".drum").length

for(var i=0; i < (numberOfDrum);i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick() {
    alert('I Got Clicked')
}
