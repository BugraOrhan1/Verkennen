inputTeams = document.getElementById('input-teams');

inputTeam1.value = ''; 
inputTeam2.value = ''; 

function setyellow(button){
    counterTeam1.classList.remove('serving');
    counterTeam2.classList.remove('serving');
    button.classList.add('serving');
}

function start(event){
    if (servingTeam1.checked){
        console.log('button 1 is active')
        setyellow(counterTeam1);
    }
    if (servingTeam2.checked){
        console.log('button 2 is active')
        setyellow(counterTeam2);
    }
    
}
startButton.addEventListener('click',start);

function count(event){
    counterTeam1.classList.remove('serving');
    counterTeam2.classList.remove('serving');
    const button = event.srcElement;
    let score = parseInt(button.innerText) + 1
    button.innerText = score;
    setyellow(button)
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value || '';
    nameTeam2.innerText = inputTeam2.value || '';
}

function annuleer(event) {
    counterTeam1.innerText = 0;
    counterTeam2.innerText = 0;
    counterTeam1.classList.remove('serving');
    counterTeam2.classList.remove('serving');
}

function savedscore(event){
    counterTeam2.score
}

const scoreDisplay = document.createElement('div');
scoreDisplay.id = 'scoreDisplay';
scoreDisplay.style.position = 'fixed';
scoreDisplay.style.top = '10px';
scoreDisplay.style.right = '10px';
document.body.appendChild(scoreDisplay);

let scoreTeam1 = 0;
let scoreTeam2 = 0;



function count(event) {
    counterTeam1.classList.remove('serving');
    counterTeam2.classList.remove('serving');
    const button = event.srcElement;
    let score = parseInt(button.innerText) + 1;
    button.innerText = score;
    setyellow(button);

    if (button.id === 'counterTeam1') {
        scoreTeam1 = score;
    } else if (button.id === 'counterTeam2') {
        scoreTeam2 = score;
    }

    updateScoreDisplay();
}


function updateScoreDisplay() {
    scoreDisplay.innerText = 'Score: Team 1 - '+scoreTeam1+' | Team 2 - '+scoreTeam2;
}


undoButton.addEventListener('click',annuleer)

inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);