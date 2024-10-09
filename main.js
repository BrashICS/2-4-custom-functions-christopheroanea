/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/




function to_fahrenheit() {

    let celsius = Number(prompt("How many degrees celius do you feel it is outside today?"))
    let fahrenheit = (celsius * 9/5) + 32
    console.log(`${fahrenheit} Fahrenheit is equal to ${celsius}`)
}

function roll() {
            let roll = Math.random() * 6
            roll = (Math.floor(Math.random() * 6))
            console.log(`The dice you rolled is ${roll}`)
}



