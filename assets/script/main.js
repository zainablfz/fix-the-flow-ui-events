// ANIMATIE 1

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Button 1

// Selecteren van het element

let frontend = document.querySelector('a:nth-of-type(1)')

// Eventlistener + functie toevoegen (classList)

frontend.addEventListener ('click', colorchange)
function colorchange(){
  console.log("button clicked");


frontend.classList.toggle('color');
}

// Button 2

// Selecteren van het element

let design = document.querySelector('a:nth-of-type(2)')

// Eventlistener + functie toevoegen (classList)

document.addEventListener('keydown', flip)

function flip(e) { 
  if(e.key == "f") { 
    console.log("we hebben een "+e.key) 
    design.classList.toggle('flip') 
  }
}


// Button 3

// Selecteren van het element
let and = document.querySelector('a:nth-of-type(3)')

// Eventlistener + functie toevoegen (classList)

and.addEventListener('mouseover', turnaround)
function turnaround(){
  console.log("draaie")
  and.classList.toggle('turnaround')
}

// Button 4

// Selecteren van het element

let development = document.querySelector('a:nth-of-type(4)');

//EventListener + functie toevoegen (classList)

development.addEventListener('click', scaleLink);

function scaleLink(event) {
  event.preventDefault(); 

  // Voeg een nieuwe klasse toe om de animatie toe te passen
  development.classList.add('scale-animation');

  // Verwijder de klasse na een korte vertraging om de animatie te herhalen
  setTimeout(function() {
    development.classList.remove('scale-animation');
  }, 1000); // Verander dit getal om de vertraging aan te passen (hier: 1 seconde)
}


//EventListener + functie toevoegen (classList)



// Button 5

// Selecteren van het element
let sprint = document.querySelector("a:nth-of-type(5)")

sprint.addEventListener('mouseover', colorHandler)
sprint.addEventListener('animationend', colorHandler)

function colorHandler() {
  sprint.classList.toggle('color')
}

//EventListener + functie toevoegen (classList)


// Button 6

// Selecteren van het element

let fix = document.querySelector("a:nth-of-type(6)")

//EventListener + functie toevoegen (classList)

fix.addEventListener('click', rotateHandler)
fix.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  fix.classList.toggle('rotate')
}



// Button 7

// Selecteren van het element

let the = document.querySelector("a:nth-of-type(7)")

the.addEventListener('click', fadeUpHandler)
the.addEventListener('animationend', fadeUpHandler)

function fadeUpHandler() {
  the.classList.toggle('fade-up')
}

//EventListener + functie toevoegen (classList)


// Button 8

// Selecteren van het element

let flow = document.querySelector("a:nth-of-type(8)")

//EventListener + functie toevoegen (classList)

flow.addEventListener("click", function () {
  flow.classList.toggle("changeSize");
})





// Button 9

// Selecteren van het element

let user = document.querySelector("a:nth-of-type(9)")

//EventListener + functie toevoegen (classList)

user.addEventListener('click', pulseHandler)
user.addEventListener('animationend', pulseHandler)

function pulseHandler() {
  user.classList.toggle('pulse')
}





// Button 10

// Selecteren van het element

let pressTimer;
const interface = document.querySelector('a:nth-of-type(10)');


window.addEventListener('load', () => {
  interface.focus();
});

interface.addEventListener('keydown', (event) => {
  if (event.key === 'x') {
    pressTimer = setTimeout(() => {
      interface.classList.add('scaled');
    }, 5000);
  }
});

interface.addEventListener('keyup', (event) => {
  if (event.key === 'x') {
    clearTimeout(pressTimer);
    interface.classList.remove('scaled');
  }
});

//EventListener + functie toevoegen (classList)