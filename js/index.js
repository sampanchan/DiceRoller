console.log('hello')


//Dice roller (placed at bottom of screen [will have 4 di: 4,6,10, 20])
// draggable( cursor picks up dice)
// drops wherever on screen
//once dropped: twists to random side(face) to show numbers


//drag

let obj = document.querySelector('img')
Draggable.create(".place-holder", {type:"x,y", edgeResistance:0.65, bounds:"body", inertia:true});
gsap.to(obj, {inertia: {x: 500, y: -300}});