
window.addEventListener("DOMContentLoaded",function() {
    pokemanball = document.querySelector("#pokemonball");
    pokemanball.rot = 0;
    pokemanball.rotation  = 1;
    pokemanballloop();

    car = document.querySelector("#car");
    car.pos = 0;
    car.move = 0.01;
    carloop();

    rocket = document.querySelector("#rocket");
    rocket.pos = 0;
    rocket.move = 0.1;
    rocketloop();

    dude = document.querySelector("#dude");
    dude.size = 0;
    dude.grow = 0.002;
    dudeloop();

    sun = document.querySelector("#sun");
    sun.opa = 0;
    sun.grow = 0.001;
    sunloop();

    
    
})

function pokemanballloop(){
        pokemanball.rot += pokemanball.rotation;
        pokemanball.setAttribute("rotation",{x:pokemonball.rot, y:0, z:0});
         window.requestAnimationFrame(pokemanballloop); 
}

function carloop(){
    car.pos -= car.move;
    car.setAttribute("position",{x:car.pos, y:0, z:-8});
    window.requestAnimationFrame(carloop);
}

function rocketloop(){
    rocket.pos += rocket.move;
    rocket.setAttribute("position",{x:0, y:rocket.pos, z:-8});
    window.requestAnimationFrame(rocketloop);
}

function dudeloop(){
    dude.size += dude.grow;
    dude.setAttribute("scale",{x:dude.size, y:dude.size, z:dude.size});
    window.requestAnimationFrame(dudeloop);
}


function sunloop(){
    sun.opa += sun.grow;
    sun.setAttribute("opacity", sun.opa);
    window.requestAnimationFrame(sunloop);
}