
// document.querySelector("button").addEventListener("click", function () {alert("I have been clicked");}); // annonymus fucntion 


// function handleClick() {
//     alert("I have been clicked");
// }

for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {

    // document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML); 

        
        // this.style.color = "black";

        // console.log(this);
        // console.log(i);

        // var audio = new Audio("./sounds/crash.mp3");
        // audio.play();
        
        // alert("Hello");

    });
    
}

document.addEventListener("keypress", function(event){
    // console.log(event.key);
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed); 
    // alert("Key was pressed");
})

function makeSound (key) {
    switch (key) {            // this is like if this.innerHTML == "w" play crash sound, and beacase of add event listen it happens on click
            
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

    
        default:
            break;
    }
}

function buttonAnimation(key) {

    var currentButton = document.querySelector("." + key);

    currentButton.classList.add("pressed");

    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}