let particleID = 0;

function launchAnimation() {
    console.log("Animation Launched");
    addParticle();
    addParticle();
    addParticle();
    addParticle();
    addParticle();
    addParticle();
    addParticle();
    addParticle();
    //setTimeout(updateAnimationTime,1000);
}

function updateAnimationTime() {
    let time = 10 * Math.random() + 2;
    //console.log(time);
    let particle = document.querySelector('.particle');
    particle.style.setProperty('--animation-time', time +'s');
    setTimeout(updateAnimationTime, time * 1000);
}

function addParticle(){
    let newParticle = document.createElement("div");
    newParticle.className = "particle";
    newParticle.id = particleID;
    let particleContainer = document.querySelector('.particle-container');
    console.log(particleContainer);
    particleContainer.appendChild(newParticle);
    updatePositions(newParticle.id)
    particleID++;
}

function updatePositions(newParticleID){
    console.log(newParticleID);
    let newParticle = document.getElementById(newParticleID);
    let positionLow = 10 + (newParticleID * 5);
    let positionHigh = 80 - (newParticleID * 5);
    newParticle.style.setProperty('--animation-left-0', positionLow +'%');
    newParticle.style.setProperty('--animation-left-25', positionHigh +'%');
    newParticle.style.setProperty('--animation-left-50', positionHigh +'%');
    newParticle.style.setProperty('--animation-left-75', positionLow +'%');
    newParticle.style.setProperty('--animation-left-100', positionLow +'%');
    newParticle.style.setProperty('--animation-top-0', positionLow +'%');
    newParticle.style.setProperty('--animation-top-25', positionLow +'%');
    newParticle.style.setProperty('--animation-top-50', positionHigh +'%');
    newParticle.style.setProperty('--animation-top-75', positionHigh +'%');
    newParticle.style.setProperty('--animation-top-100', positionLow +'%');
}
