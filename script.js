var character = document.getElementById("character");
var block = document.getElementById("block");
var clock = document.getElementById("clock");

var start = Date.now();
var timerB = 3000;
var timerA = 20000;

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        timer(timerA);
        clock.innerHTML = "START!";
        setTimeout(500);
        timer(timerB);
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function timer(time) {
    var delta = Date.now() - start;
    document.getElementById("demo").innerHTML = time-delta;
    if (time-delta === 0) {return}
}

function jump(){    
    if(character.classList == "animate"){return}
    character.classList.add("animate");

    setTimeout(function(){
        character.classList.remove("animate");
    }, 300);

    var checkDead = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        
        if(blockLeft<-10 && blockLeft>-60 && characterTop>=130){
            block.style.animation="none";
            block.style.display="none";
            alert("game over.");
        }
    },10);

    animate();
}

function animate(){
    if (character.src === "./img/dino1.png"){
        character.src="./img/dino2.png";
    }
    else if (character.src === "./img/dino2.png"){
        character.src="./img/dino3.png";
    }
    else {
        character.src="./img/dino1.png";
    }
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump()
    }
  })