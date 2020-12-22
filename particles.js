let particleID = 0;

function launchAnimation() {
    console.log("Animation Launched");
    addParticle(100);
    for (let i = 0; i < 1; i--){
        runAnimation();
    }
}

function runAnimation(){
    updateAnimationTime();
    for(let i = 0; i < numberParticles; i++){
            updatePositions(i);
    }
}

function addParticle(numberParticles){
    for(let i = 0; i < numberParticles; i++){
        let newParticle = document.createElement("div");
        newParticle.className = "particle";
        newParticle.id = particleID;
        let particleContainer = document.querySelector('.particle-container');
        console.log(particleContainer);
        particleContainer.appendChild(newParticle);
        updatePositions(newParticle.id)
        particleID++;
    }
    
}

function updatePositions(newParticleID){
    console.log(newParticleID);
    let newParticle = document.getElementById(newParticleID);
    //height: 900px; width: 1400px;
    let positionLowWidth = getRandomArbitrary(0,1350);
    let positionHighWidth = getRandomArbitrary(0,1350);
    let positionLowHeight = getRandomArbitrary(0,300);
    let positionHighHeight = getRandomArbitrary(0,300);
    let postitionOpacity0 = Math.random();
    let postitionOpacity25 = Math.random();
    let postitionOpacity50 = Math.random();
    let postitionOpacity75 = Math.random();
    let postitionOpacity100 = Math.random();

    newParticle.style.setProperty('--animation-left-0', positionLowWidth +'px');
    newParticle.style.setProperty('--animation-left-25', positionHighWidth +'px');
    newParticle.style.setProperty('--animation-left-50', positionHighWidth +'px');
    newParticle.style.setProperty('--animation-left-75', positionLowWidth +'px');
    newParticle.style.setProperty('--animation-left-100', positionLowWidth +'px');

    newParticle.style.setProperty('--animation-top-0', positionLowHeight +'px');
    newParticle.style.setProperty('--animation-top-25', positionLowHeight  +'px');
    newParticle.style.setProperty('--animation-top-50', positionHighHeight  +'px');
    newParticle.style.setProperty('--animation-top-75', positionHighHeight +'px');
    newParticle.style.setProperty('--animation-top-100', positionLowHeight  +'px');

    newParticle.style.setProperty('--animation-opacity-0', postitionOpacity0);
    newParticle.style.setProperty('--animation-opacity-25', postitionOpacity25);
    newParticle.style.setProperty('--animation-opacity-50', postitionOpacity50);
    newParticle.style.setProperty('--animation-opacity-75', postitionOpacity75);
    newParticle.style.setProperty('--animation-opacity-100', postitionOpacity100);

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function updateAnimationTime() {
    for(let i = 0; i < particleID; i++ ){
        let time = 10 * Math.random() + 2; 
        let part = document.getElementById(i);
        part.style.setProperty('--animation-time', time +'s');
    }
}