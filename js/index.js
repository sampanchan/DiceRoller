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

//submit name inside JS: document write inside .result section

//Dice rolls inside .result section
// getElementByID
//"element".innerHtml()


dice4.addEventListener('click', function(){
    console.log('dice4')
    let rollDice4 = function(){
        let randomOne = 1 + Math.floor(Math.random()* 4)
        return randomOne
        

    }
    console.log(rollDice4(1))
    let dFour = document.querySelector('.diceResult4')
    dFour.innerHTML= 'you rolled a ' + rollDice4(1)
    
})



dice6.addEventListener('click', function(){
    console.log('dice6')
    let rollDice6 = function(){
        let randomTwo = 1 + Math.floor(Math.random()* 6)
        return randomTwo

    }
    console.log(rollDice6(1))
    let dSix = document.querySelector('.diceResult6')
    dSix.innerHTML= 'you rolled a ' + rollDice6(1)

})



dice8.addEventListener('click', function(){
    console.log('dice8')
    let rollDice8 = function(){
        let randomThree = 1 + Math.floor(Math.random()* 8)
        return randomThree

    }
    console.log(rollDice8(1))
    let dEight = document.querySelector('.diceResult8')
    dEight.innerHTML= 'you rolled a ' + rollDice8(1)
})



dice10.addEventListener('click', function(){
    console.log('dice10')
    let rollDice10 = function(){
        let randomFour = 1 + Math.floor(Math.random()* 10)
        return randomFour
        
    }
    console.log(rollDice10(1))
    let dTen = document.querySelector('.diceResult10')
    dTen.innerHTML= 'you rolled a ' + rollDice10(1)
})



dice20.addEventListener('click', function(){
    console.log('dice20')
    let rollDice20 = function(){
        let randomFive = 1 + Math.floor(Math.random()* 20)
        return randomFive

    }
    console.log(rollDice20(1))
    let dTwenty = document.querySelector('.diceResult20')
    dTwenty.innerHTML= 'you rolled a ' + rollDice20(1)

})