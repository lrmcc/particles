let animType;
let numParticles;

let positions = [0, 25, 50, 75, 100];
let postitionOpacity = [1, .8, .5, .3, 0];
let postitionX = [], postitionY = [];
let bckgrdColors = [], blurColors = [];
let animTransX = [], animTransY = [];
let animOpac = [], animColor = [], animBlur = [];

function launchAnimation(animChoice, numPart) {

    animType = animChoice;
    numParticles = numPart;

    initAnimFields()
    setColors();
    
    console.log(animType + " Animation Launching");
    addParticles(); 
    runAnimation();
}

function setColors() {
    switch (animType) {
        case "clockwise":
            break;
        case "up":
            bckgrdColors = ["#e3dede", "#bab6b6", "#737070", "#383838", "#121212"];
            blurColors = ["#e3dede", "#bab6b6", "#737070", "#383838", "#121212"];
            break;
        case "down":
            bckgrdColors = ["#336bc4", "#2a58a1", "#20447d", "#0d3678", "#082554"];
            blurColors = ["#2cb1bf", "#2797a3", "#1f7680", "#145961", "#09464d"];
            break;
        default:
            break;
    }
}

function initAnimFields() {
    for (let i = 0; i < positions.length; i++) {
        animTransX.push('--animation-translateX-' + positions[i]);
        animTransY.push('--animation-translateY-' + positions[i]);
        animOpac.push('--animation-opacity-' + positions[i]);
        animColor.push('--animation-color-' + positions[i]);
        animBlur.push('--animation-blur-' + positions[i]);
    }
}

function runAnimation() {
    for(let i = 0; i < numParticles; i++) {
            updateParticles(i, animType);
    }
}

function addParticles() {
    let particleContainer = document.querySelector('.particle-container');

    for(let i = 0; i < numParticles; i++) {
        let newParticle = document.createElement("div");
        newParticle.className = "particle";
        newParticle.id = i;
        particleContainer.appendChild(newParticle);
    }
}

function updateParticles(particleID, animChoice) {
    let particleToUpdate = document.getElementById(particleID);

    updateAnimationTime(particleToUpdate);

    switch (animChoice) {
        case "clockwise":
            updateClockwiseParticle(particleToUpdate);
            break;
        case "up":
            updateUpParticle(particleToUpdate);
            break;
        case "down":
            updateDownParticle(particleToUpdate);
            break;
        default:
            break;
    }
}

function updateClockwiseParticle(particleToUpdate) {
    updatePositions();
    updateOpacity();

    for(let i = 0; i < positions.length; i++) {
        particleToUpdate.style.setProperty(animTransX[i], postitionX[i] + "px");
        particleToUpdate.style.setProperty(animTransY[i], postitionY[i] + "px");
        particleToUpdate.style.setProperty(animOpac[i], postitionOpacity[i]);
    }
}

function updateUpParticle(particleToUpdate) {
    updatePositions();

    for(let i = 0; i < positions.length; i++) {
        particleToUpdate.style.setProperty(animTransX[i], postitionX[i] + "px");
        particleToUpdate.style.setProperty(animTransY[i], postitionY[i] + "px");
        particleToUpdate.style.setProperty(animOpac[i], postitionOpacity[i]);
        particleToUpdate.style.setProperty(animColor[i], bckgrdColors[i]);
        particleToUpdate.style.setProperty(animBlur[i], blurColors[i]);
    }
}

function updateDownParticle(particleToUpdate) {
    updatePositions();
    
    particleToUpdate.style.setProperty("animation-timing-function", "linear");
    for(let i = 0; i < positions.length; i++) {
        particleToUpdate.style.setProperty(animTransX[i], postitionX[i] + "px");
        particleToUpdate.style.setProperty(animTransY[i], postitionY[i] + "px");
        particleToUpdate.style.setProperty(animOpac[i], postitionOpacity[i]);
        particleToUpdate.style.setProperty(animColor[i], bckgrdColors[i]);
        particleToUpdate.style.setProperty(animBlur[i], blurColors[i]);
    }
}

function updatePositions() {
    switch (animType) {
        case "clockwise":
            postitionX = [getRandom(0,700), getRandom(700,1400), getRandom(700,1400), getRandom(0,700), getRandom(0,700)];
            postitionY = [getRandom(0,450), getRandom(0,450), getRandom(450,900), getRandom(450,900), getRandom(0,450)];
            break;
        case "up":
            postitionX = [getRandom(0,1400), getRandom(0,1400), getRandom(0,1400), getRandom(0,1400), getRandom(0,1400)];
            postitionY = [900, 700, 500, 300, 100];
            break;
        case "down":
            let downX = getRandom(0,1400);
            postitionX = [downX+50, downX+50, downX+50, downX+50, downX+50];
            postitionY = [100, 300, 500, 700, 900];
            break;
        default:
            break;
    }
}

function updateOpacity() {
    switch (animType) {
        case "clockwise":
            postitionOpacity = [Math.random(), Math.random(), Math.random(), Math.random()];
            break;
        default:
            break;
    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

function updateAnimationTime(particleToUpdate) {
    let time = 10 * Math.random() + 2; 
    particleToUpdate.style.setProperty('--animation-time', time +'s');
}


function clearAnimation() {
    console.log("Clearing " + animType + " Animation");
    let particleContainer = document.querySelector('.particle-container');
    while (particleContainer.lastElementChild) {
        particleContainer.removeChild(particleContainer.lastElementChild);
  }
}