console.log('hello')


let rollResults = document.querySelector('.roll-results')
let dice4 = document.querySelector('.d4')
let dice6 = document.querySelector('.d6')
let dice8 = document.querySelector('.d8')
let dice10 = document.querySelector('.d10')
let dice20 = document.querySelector('.d20')
let diceImages = document.querySelectorAll('.dice img')
let yaDumbName = document.querySelector('#name')


yaDumbName.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') e.preventDefault()
})

//submit name inside JS: document write inside .result section

//Dice rolls inside .result section
// getElementByID
//"element".innerHtml()
let rollDice = function(sides){
    return Math.ceil(Math.random()* sides)
}

dice4.addEventListener('click', function(){
    console.log('dice4')
   

    // rotate image every time  its clicked
    // diceImages.forEach(function(diceImage) {
    //    diceImage.classList.add('animation')
    // })

    this.classList.add('animation')
    setTimeout(() => {
        this.classList.remove('animation')
    }, 1000)
   
    var sound = new Howl({
        src: ['js/roll.wav']
        });
        
        sound.play()
    
    let newResultLI = document.createElement('li')
    newResultLI.classList.add('diceResult4')
    newResultLI.innerHTML= yaDumbName.value + ' rolled a ' + rollDice(4)
    rollResults.insertBefore(newResultLI, rollResults.firstChild)

})



dice6.addEventListener('click', function(){
    console.log('dice6')
    this.classList.add('animation')
    setTimeout(() => {
        this.classList.remove('animation')
    }, 1000)

    var sound = new Howl({
        src: ['js/roll.wav']
        });
        
        sound.play()

    let newResultLI = document.createElement('li')
    newResultLI.classList.add('diceResult6')
    newResultLI.innerHTML= yaDumbName.value + ' rolled a ' + rollDice(6)
    rollResults.insertBefore(newResultLI, rollResults.firstChild)

})



dice8.addEventListener('click', function(){
    console.log('dice8')
    this.classList.add('animation')
    setTimeout(() => {
        this.classList.remove('animation')

    }, 1000)


    //dice roll sound
    var sound = new Howl({
        src: ['js/roll.wav']
        });
        
        sound.play()

    let newResultLI = document.createElement('li')
    newResultLI.classList.add('diceResult8')
    newResultLI.innerHTML= yaDumbName.value + ' rolled a ' + rollDice(8)
    rollResults.insertBefore(newResultLI, rollResults.firstChild)
})



dice10.addEventListener('click', function(){
    console.log('dice10')
    this.classList.add('animation')
    setTimeout(() => {
        this.classList.remove('animation')
    }, 1000)

    var sound = new Howl({
        src: ['js/roll.wav']
        });
        
        sound.play()

    let newResultLI = document.createElement('li')
    newResultLI.classList.add('diceResult10')
    newResultLI.innerHTML= yaDumbName.value + ' rolled a ' + rollDice(10)
    rollResults.insertBefore(newResultLI, rollResults.firstChild)
})



dice20.addEventListener('click', function(){
    console.log('dice20')
    this.classList.add('animation')
    setTimeout(() => {
        this.classList.remove('animation')
    }, 1000)

    var sound = new Howl({
        src: ['js/roll.wav']
        });
        
        sound.play()
    

    let newResultLI = document.createElement('li')
    newResultLI.classList.add('diceResult20')
    newResultLI.innerHTML= yaDumbName.value + ' rolled a ' + rollDice(20)
    rollResults.insertBefore(newResultLI, rollResults.firstChild)

})



