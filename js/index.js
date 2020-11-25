console.log('hello')


//Dice roller (placed at bottom of screen [will have 4 di: 4,6,10, 20])
// draggable( cursor picks up dice)
// drops wherever on screen
//once dropped: twists to random side(face) to show numbers


//drag

// let obj = document.querySelector('img')
// Draggable.create(".place-holder", {type:"x,y", edgeResistance:0.65, bounds:"body", inertia:true});
// gsap.to(obj, {inertia: {x: 500, y: -300}});

let dice4 = document.querySelector('.d4')
let dice6 = document.querySelector('.d6')
let dice8 = document.querySelector('.d8')
let dice10 = document.querySelector('.d10')
let dice20 = document.querySelector('.d20')

dice4.addEventListener('click', function(){
    console.log('dice4')
    let rollDice4 = function(){
        let randomOne = 1 + Math.floor(Math.random()* 4)
        console.log(rollDice4(1))

    }

})



dice6.addEventListener('click', function(){
    console.log('dice6')
    let rollDice6 = function(){
        let randomTwo = 1 + Math.floor(Math.random()* 6)
        console.log(rollDice6(1))

    }
})



dice8.addEventListener('click', function(){
    console.log('dice8')
    let rollDice8 = function(){
        let randomThree = 1 + Math.floor(Math.random()* 8)
        console.log(rollDice8(1))

    }
})



dice10.addEventListener('click', function(){
    console.log('dice10')
    let rollDice10 = function(){
        let randomFour = 1 + Math.floor(Math.random()* 10)
        console.log(rollDice10(1))

    }
})



dice20.addEventListener('click', function(){
    console.log('dice20')
    let rollDice20 = function(){
        let randomFive = 1 + Math.floor(Math.random()* 20)
        console.log(rollDice20(1))

    }
})