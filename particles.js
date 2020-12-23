let numParticles = 0;
let positions = [0,25,50,75,100];
let animationType = "";

function launchAnimation(animType) {
    animationType = animType;
    console.log(animationType + " Animation Launched");
    addParticle(100);
    runAnimation();
}

function runAnimation(){
    for(let i = 0; i < numParticles; i++){
            updateParticles(i,animationType);
    }
}

function addParticle(numberParticlesCreate){
    for(let i = 0; i < numberParticlesCreate; i++){
        let newParticle = document.createElement("div");
        newParticle.className = "particle";
        newParticle.id = i;
        let particleContainer = document.querySelector('.particle-container');
        particleContainer.appendChild(newParticle);
        numParticles++;
    }
    
}

function updateParticles(particleID, animationType){
    let particleToUpdate = document.getElementById(particleID);
    console.log(particleToUpdate.id);
    updateAnimationTime(particleToUpdate);
    if (animationType == "clockwise") updateClockwiseParticle(particleToUpdate);
    if (animationType == "up") updateUpParticle(particleToUpdate);
    
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

function updateAnimationTime(particleToUpdate) {
    let time = 10 * Math.random() + 2; 

    particleToUpdate.style.setProperty('--animation-time', time +'s');
}

function updateClockwiseParticle(particleToUpdate){
    let postitionTranslateX = [getRandom(0,700),getRandom(700,1400),getRandom(700,1400),getRandom(0,700),getRandom(0,700)];
    let postitionTranslateY = [getRandom(0,450),getRandom(0,450),getRandom(450,900),getRandom(450,900),getRandom(0,450)];
    let postitionOpacity = [Math.random(),Math.random(),Math.random(),Math.random()];

    for(let i = 0; i < positions.length; i++){
        let animateTranslateXVar = '--animation-translateX-' + positions[i];
        let animateTranslateYVar = '--animation-translateY-' + positions[i];
        let animateOpacVar = '--animation-opacity-' + positions[i];
        particleToUpdate.style.setProperty(animateTranslateXVar, postitionTranslateX[i] + "px");
        particleToUpdate.style.setProperty(animateTranslateYVar, postitionTranslateY[i] + "px");
        particleToUpdate.style.setProperty(animateOpacVar, postitionOpacity[i]);
    }
}
function updateUpParticle(particleToUpdate){
    let postitionTranslateX = [getRandom(0,1400),getRandom(0,1400),getRandom(0,1400),getRandom(0,1400),getRandom(0,1400)];
    let postitionTranslateY = [900,700,500,300,100];
    let postitionOpacity = [1,.8,.5,.3,0];
    let bckgrdColors = ["#e3dede","#bab6b6","#737070","#383838","#121212"];
    let blurColors = ["#e3dede","#bab6b6","#737070","#383838","#121212"];

    for(let i = 0; i < positions.length; i++){
        let animateTranslateXVar = '--animation-translateX-' + positions[i];
        let animateTranslateYVar = '--animation-translateY-' + positions[i];
        let animateOpacVar = '--animation-opacity-' + positions[i];
        let animateColorVar = '--animation-color-' + positions[i];
        let animateBlurVar = '--animation-blur-' + positions[i];
        particleToUpdate.style.setProperty(animateTranslateXVar, postitionTranslateX[i] + "px");
        particleToUpdate.style.setProperty(animateTranslateYVar, postitionTranslateY[i] + "px");
        particleToUpdate.style.setProperty(animateOpacVar, postitionOpacity[i]);
        particleToUpdate.style.setProperty(animateColorVar, bckgrdColors[i]);
        particleToUpdate.style.setProperty(animateBlurVar, blurColors[i]);
    }
}

function clearAnimation(){
    let particleContainer = document.querySelector('.particle-container');
    while (particleContainer.lastElementChild) {
        particleContainer.removeChild(particleContainer.lastElementChild);
  }
}