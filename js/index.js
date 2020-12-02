console.log('hello')


let rollResults = document.querySelector('.roll-results')
let dice4 = document.querySelector('.d4')
let dice6 = document.querySelector('.d6')
let dice8 = document.querySelector('.d8')
let dice10 = document.querySelector('.d10')
let dice20 = document.querySelector('.d20')
let diceImages = document.querySelectorAll('.dice img')
let yaDumbName = document.querySelector('#name')
let socket = io('http://circuslabs.net:20202');

yaDumbName.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') e.preventDefault()
})


let rollDice = function(sides){
    return Math.ceil(Math.random()* sides)
}

dice4.addEventListener('click', function(){
    console.log('dice4')
   

    this.classList.add('animation')
    setTimeout(() => {
        this.classList.remove('animation')
    }, 1000)
   
    var sound = new Howl({
        src: ['js/roll.wav']
        });
        
        sound.play()



    // server

    socket.emit('request roll', {
        count: 1,
        faces: 4,
        name: yaDumbName.value,
    });
    
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


    // server

    socket.emit('request roll', {
        count: 1,
        faces: 6,
        name: yaDumbName.value,
    });

   

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


    //server
    socket.emit('request roll', {
        count: 1,
        faces: 8,
        name: yaDumbName.value,
    });

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

    //server
      socket.emit('request roll', {
        count: 1,
        faces: 10,
        name: yaDumbName.value,
    });


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

    //server
    socket.emit('request roll', {
        count: 1,
        faces: 20,
        name: yaDumbName.value,
    });
    


})


let dumbPeopleRolls = function(data){
    console.log('the server sent a "rolled" event', data)
    console.log(data.name)
    let newResultLI = document.createElement('li')
    newResultLI.classList.add('diceResult20')
    newResultLI.innerHTML= data.name + ' rolled a ' + data.rolls[0]
    rollResults.insertBefore(newResultLI, rollResults.firstChild)
}
socket.on('rolled', dumbPeopleRolls);
// console.log(dumbPeopleRolls)















// let dumbPeopleRolls = function(){
//   let newResultLI = document.createElement('li')
//     newResultLI.classList.add('diceResult20')
//     newResultLI.innerHTML= yaDumbName.value + ' rolled a ' + rollDice(20)
//     rollResults.insertBefore(newResultLI, rollResults.firstChild)
// }

// socket.on('rolled', function (dumbPeopleRolls) {
// 	console.log(dumbPeopleRolls);
// });



