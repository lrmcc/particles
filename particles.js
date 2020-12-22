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
    console.log(animationType);
    let particleToUpdate = document.getElementById(particleID);
    updateAnimationTime(particleToUpdate);
    if (animationType == "square") updateSquareParticle(particleToUpdate);
    if (animationType == "up") updateUpParticle(particleToUpdate);
    
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function updateAnimationTime(particleToUpdate) {
    let time = 10 * Math.random() + 2; 
    particleToUpdate.style.setProperty('--animation-time', time +'s');
}

function updateSquareParticle(particleToUpdate){
    let width = getRandomArbitrary(400,1000);
    let widthVariance = getRandomArbitrary(0,400);
    let positionWidth = [width/2, width, width-widthVariance, width+widthVariance, width];
    let height = getRandomArbitrary(200,700);
    let heightVariance = getRandomArbitrary(0,150);
    let positionTop = [height/2, height, height+(heightVariance/2), height+(heightVariance/2), height];
    let postitionOpacity = [Math.random(),Math.random(),Math.random(),Math.random()];

    for(let i = 0; i < positions.length; i++){
        let animateTopVar = '--animation-top-' + positions[i];
        let animateLeftVar = '--animation-left-' + positions[i];
        let animateOpacVar = '--animation-opacity-' + positions[i];
        particleToUpdate.style.setProperty(animateTopVar, positionTop[i] +'px');
        particleToUpdate.style.setProperty(animateLeftVar, positionWidth[i] +'px');
        particleToUpdate.style.setProperty(animateOpacVar, postitionOpacity[i]);
    }
}
function updateUpParticle(particleToUpdate){
    let width = getRandomArbitrary(400,1000);
    let widthVariance = getRandomArbitrary(0,400);
    let positionWidth = [width/2, width, width-widthVariance, width+widthVariance, width];
    let positionTop = [850,650,450,250,50];
    let postitionOpacity = [1,.8,.5,.3,0];
    let bckgrdColors = ["#e3dede","#bab6b6","#737070","#383838","#121212"];

    for(let i = 0; i < positions.length; i++){
        let animateLeftVar = '--animation-left-' + positions[i];
        let animateTopVar = '--animation-top-' + positions[i];
        let animateOpacVar = '--animation-opacity-' + positions[i];
        let animateColorVar = '--animation-color-' + positions[i];
        particleToUpdate.style.setProperty(animateTopVar, positionTop[i] +'px');
        particleToUpdate.style.setProperty(animateLeftVar, positionWidth[i] +'px');
        particleToUpdate.style.setProperty(animateOpacVar, postitionOpacity[i]);
        particleToUpdate.style.setProperty(animateColorVar, bckgrdColors[i]);
    }
}