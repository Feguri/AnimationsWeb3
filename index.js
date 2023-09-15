// Global variables
let ship = document.getElementById('ship')

let p = 0;
const bottom = 250
let oper = 1;

let lightcolor1 = '#9990C5'
let lightcolor2 = '#F58E81'
let lightcolor3 = '#FFF197'

let colorlist = [lightcolor1, lightcolor2, lightcolor3]

let lightsOnStarship = document.getElementsByClassName('light')

const hover = function() {

    if (p > bottom || p < 0) {

      oper *= -1;
    }
    
    p = p + 5 * oper;

    ship.style.bottom = p + "px";
}

const changeLights = function() {
    
    for (let light of lightsOnStarship) {
        light.style.fill = colorlist[randomIntFromInterval(0, 2)]
    }
}

const changeLightsUFO = function() {
    
    for (let light of lightsOnStarship) {
        light.style.color = colorlist[randomIntFromInterval(0, 2)]
    }
}

let i = setInterval(hover, 20);
let o = setInterval(changeLights, 20); 
let f = setInterval(changeLightsUFO, 200); 

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }