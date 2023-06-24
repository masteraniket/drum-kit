
// If I want to trigger alert made in the function only when the 2nd button is clicked

// document.querySelectorAll("button")[1].addEventListener("click", handleclick);

// function handleclick(){
//     alert("i got clicked.");
// }

// 🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚


//Other Way Most coders like writing the anonymous function without giving function a name , diretly inserting the function(){} inside eventListener parenthesis parameter.

// We can also write the whole function (anonymous function) at the place of just writing the function name like 👇🏻



// document.querySelectorAll("button")[2].addEventListener("click", function(){
//     alert("You clicked the letter 's' drum.");
// })



// 🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚🔚

// --------Detecting Button press-----------------😎

//Targeting all button at once.

//This will give us the number of buttons of drum
var numberOfButtons = document.querySelectorAll(".drum").length;

// Loop
for(var i=0; i<numberOfButtons; i++){   
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //Write what to do when click is detected
        
        // console.log(this);
        //this is simply the button that triggered the event
        var buttonInnerHTML = this.innerHTML; //w a s d j k l 

        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);

    })
}


// ------------Detecting Keyboard press ---------😎

//We are trying to play sounds on keyboard press

document.addEventListener("keydown", function(event){
    // console.log(event);
    makeSound(event.key) //just like we access property of an object

    buttonAnimation(event.key);

})

// 😎😎😎
//function made to play sounds
function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default:
            //Not required -- But a good practice what if some other buttonLetter instead of wasdjkl triggers then we'll console that letter on console window.
            console.log(buttoninnerHTML);
            break;
    }

}



//Adding animation to our website 🫡🫡

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");

    // setTimeout(function, milliseconds of delay before executing the function given as 1st input)
    setTimeout(function(){
        activeButton.classList.remove("pressed", 100);
    })
}
