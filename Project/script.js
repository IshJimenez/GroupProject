git const canvas = document.querySelector('canvas')
let ctx = canvas.getContext("2d")


//>>>> Global variables for spinning ship
let gMouseX = 0
let gMouseY = 0
let gShipAngleInRads = 0;

//>>>>>>>>>> CHECKS FOR LOCATION OF MOUSE <<<<<<<<
document.addEventListener('mousemove', e => {
    gMouseX=e.pageX;
    gMouseY=e.pageY;
    // console.log(gMouseX, gMouseY);
})

//>>>Makes cursor a crosshair when on canvas
document.getElementById("canvas").style.cursor="url('./images/crosshair.cur'), auto"
const context = canvas.getContext('2d')

//Juan updates
let canvasW = window.innerWidth
let canvasH = window.innerHeight

canvas.width = canvasW
canvas.height = canvasH

window.onresize = function() {
    canvas.width = canvasW
    canvas.height = canvasH
}

//Ish original code
// canvas.width = innerWidth
// canvas.height = innerHeight

//Health and Mana Bars
let health = 100
let mana = 100

let healthPct = `${health}%`
let manaPct = `${mana}%`

document.getElementById('health-points').innerHTML = healthPct
document.getElementById('mana-points').innerHTML = manaPct

document.getElementById('health-fill').style.width = healthPct
if (health >= 70 && health <= 100) {
    document.getElementById('health-fill').style.backgroundColor = 'green'
} else if (health >= 30 && health < 70) {
    document.getElementById('health-fill').style.backgroundColor = 'yellow'
} else if (health >= 0 && health < 30) {
    document.getElementById('health-fill').style.backgroundColor = 'red'
}

document.getElementById('mana-fill').style.width = manaPct

//Score and Level Counters
score = 000
level = 1

document.getElementById('scoreNum').innerHTML = score
document.getElementById('levelNum').innerHTML = level
<<<<<<< HEAD:Project/js.js
const context = canvas.getContext('2d')

// canvas.width = innerWidth
// canvas.height = innerHeight
=======
>>>>>>> 22fbf31d0bfa8ac3cbb8feff2e7115f31b514b02:Project/script.js

// Background imported
// const spaceImg = new Image()
// spaceImg.src = "../images/falconXBackground.png"
// const space = { x: 0, y: 0, w: canvas.width, h: canvas.height, img: spaceImg }

// Ship imported
const shipImg = new Image()
shipImg.src = "../images/falconXSpaceship.png"

// Aseroids 
const astSm = new Image()
astSm.src = "../images/asteroidSm.png"

class gShip {
    constructor(x, y, w, h, img) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img
<<<<<<< HEAD:Project/js.js
        }
        draw(){
            context.drawImage(this.img, 
                this.x, 
                this.y, 
                this.w, 
                this.h)
        }   
=======
}
    draw(){
        //>>>>>This code gets the coord of the canvas    
        let canvasXY = canvas.getBoundingClientRect()

        //>>>>>This code adjusts the coord of the mouse on the page as it relates to the canvas
        let actualMouseX = gMouseX - canvasXY.x
        let actualMouseY = gMouseY - canvasXY.y

        //>>>>>>this code calculates the radian for the angle as the mouse location rates to the center of the ship which is the origin 
        gShipAngleInRads = Math.atan2(actualMouseY-this.y, actualMouseX-this.x)

        //>>>>>>>This rotates the canvas by the calculated radian + 90 degrees
        ctx.rotate(gShipAngleInRads + 90 * Math.PI/180)
        ctx.translate(-250, -350)  //This moves the 0,0 origin of the canvas to the center of the ship/car

        // console.log(gMouseX, gMouseY);

        context.drawImage(this.img, 
            this.x, 
            this.y, 
            this.w, 
            this.h)

        //>>>>>>>returns canvas to prior un-rotated state
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        console.log(gMouseX, gMouseY, gShipAngleInRads, this.x, this.y);        
    }
>>>>>>> 50fd1841616e681910caf293235aee1a81a8b495:Project/script.js
}

////Laser Weapon 1
class Laser {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        }
        draw () {
            context.beginPath()
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.fillStyle = this.color
            context.fill()
            }
            // Laser Weapon 3
            // Add velocity to each individual laser x and y 
            // For each frame set x / y coordinate for each laser
                update() {
                    this.draw()
                    this.x = this.x + this.velocity.x
                    this.y = this.y + this.velocity.y
                    }
        }

///Asteroids 1

class Sasteroid{
    constructor(x, y, w, h, img, velocity) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img
        this.velocity = velocity
        }
        draw () {
            context.beginPath()
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.fillStyle = this.color
            context.fill()
            }
                update() {
                    this.draw()
                    this.x = this.x + this.velocity.x
                    this.y = this.y + this.velocity.y
                    }
    }
<<<<<<< HEAD:Project/js.js
=======
draw () {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color
    context.fill()
}
// Laser Weapon 3
// Add velocity to each individual laser x and y 
// For each frame set x / y coordinate for each laser
    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}
//Create our player -- Ish original code
// const falcon = new gShip(canvas.width / 2 - 50, 
//     canvas.height / 2, 
//     100, 
//     100, 
//     shipImg)

//Juan changes
const falcon = new gShip(canvasW / 2 - 50, 
    canvasH / 2, 
    100, 
    100, 
    shipImg)
>>>>>>> 50fd1841616e681910caf293235aee1a81a8b495:Project/script.js

//Laser Weapon 2.2
  //Youll see clientX/Y when you click. 
  const laser = new Laser(
    //Since we want the lasers to start from the ship
    // event.clientX, 
    // event.clientY,
    canvas.width / 2,
    canvas.height / 2,
    10,
    'orange',
// Laser Weapon 4 
// Creating js object with 2 properties
    {
        x: 1,
        y: 1
    }
    )

    //Create our player
const falcon = new gShip(canvas.width / 2 - 50, 
    canvas.height / 2, 
    100, 
    100, 
    shipImg)

//Laser Weapon 5
//To get them rendered at the same time need to create array
const lasers = []

///Asteroid 3
const sasteroids = []

///Asteroid 2
//First argument of setInterval callback function(code you want to call for each specific interval
//you specify) Then its the time.
function spawnSasteroids (){
    setInterval(() => {
        /// Asteroid 4
        const x = 100
        const y = 100
        const w = 100
        const h = 100
        const img = astSm
        const velocity = {
            x: 1,
            y: 1
        }
        sasteroids.push(new Sasteroid(x, y, w, h, img, velocity))
        console.log(sasteroids)
        /// Asteroid 4 ended here
    }, 1000)
}

function animate() {
    requestAnimationFrame(animate)
    // context.drawImage(spaceImg, space.x, space.y, space.w, space.h)
    // Laser Weapon 10
    context.clearRect(0, 0, canvas.width, canvas.height)
    falcon.draw()
    //Laser Weapon 7
    //When we click we will add to the array
    lasers.forEach((laser) => {
        laser.update()
        })
    ///Asteroid 5
    sasteroids.forEach((sasteroid) => {
        sasteroid.update()
    })
}

//Laser Weapon 2.1
//First argument it takes is what event we want to listen for hence a click.
//Second argument is a function
//Anytime you call a function in response to a click using add event listener. The first argument
//within this function is going to be an event object.
addEventListener('click', (event) => { 
//Youll see clientX/Y when you click. 

//Laser Weapon 8. Distance from mouse and center of the screen
// 0 to 6.28 is equal to 0 to 360. Get exact angle from right triangle to center
    const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
    )
//Laser Weapon 9
//Equal to an empty object with an x and y property
//Cosine is always x adjacent axis. Return and number -1 to 1
//Sine will also return any num -1 to 1
//But together are going to produce 2 dif results that have a perfect ratio to
//wherever you clicked on the screen.
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    //Laser Weapon 7
    //When we click we will add to the array
    lasers.push(new Laser(canvas.width / 2,
        canvas.height / 2,
        5,
        'orange',
        velocity
        )
    )
    })

    animate()

<<<<<<< HEAD:Project/js.js
    /// Asteroids 2.5
    spawnSasteroids()
=======






    //STELIAN ADDING MUSIC AND IMAGES //////////// START LINE 170 
    //*************SOUND*////////////////////

//var audio = new Audio("../sounds/backgroundSound.mp3");
//audio.play();

let audio = new Audio('../sounds/backgroundSound.mp3');
function play() {

    if (audio.paused){
        audio.play();
    
    } else {
        audio.pause();

    }
    
}
document.querySelector ("#buttonSound").onclick = play



let explosionAsteroid = new Audio('../sounds/Explosion+3.mp3');
let explosionSapaceShip = new Audio('../sounds/Explosion+4.mp3');
let gameOver = new Audio('../sounds/gameOver.mp3');
let gameStart = new Audio('../sounds/gameStart.mp3');
let gunSound = new Audio('../sounds/GunSound.mp3'); 








//*******************IMAGES *//////////////////////


let asteroidLg = new Image();
asteroidLg.src = "../images/asteroidLg.png";

let asteroidMed = new Image();
asteroidMed.src = "../images/asteroidMed.png";

let asteroidSm = new Image();
asteroidSm.src = "../images/asteroidSm.png";

let bullet = new Image();
bullet.src = "../images/bullet.png";

let bullet2 = new Image();
bullet2.src = "../images/bullet2.png";

let explosion = new Image();
explosion.src = "../images/expplosion.png";

let explosion2 = new Image();
explosion2.src = "../images/expplosion2.png";

let falconXBackground = new Image();
falconXBackground.src = "../images/falconXBackground.png";

let falconXSpaceship = new Image();
falconXBSpaceship.src = "../images/falconXSpaceship.png";

let powerUp = new Image();
powerUp.src = "../images/powerUp.png";



/////////END STELIAN ADDING MUSIC AND IMAGES////// LINE 240
///ALSO ADDED BUTTON FOR SOUND ON/OFF IN HTML ////
>>>>>>> 50fd1841616e681910caf293235aee1a81a8b495:Project/script.js