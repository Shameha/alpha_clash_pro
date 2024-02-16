function handleKeyButton(event){
    const playerPresed = event.key;
    console.log('player pressed',playerPresed);

    //get the expected press
    const currentAphabateElement = document.getElementById('curretnt-Alphabate');
     //console.log(currentAphabateElement.innerText);
     const currentAlphabet = currentAphabateElement.innerText; 
     const expectedAlphabate=currentAlphabet.toLowerCase();
     console.log(playerPresed,expectedAlphabate); 

     //check 
     if(playerPresed === expectedAlphabate){
        console.log('you get a point');

        const currentScore =  getElementValueById('current-score');
        const updateScore = currentScore + 1;
        setElementValueById('current-score',updateScore);
        //console.log(updateScore);

       /* console.log('You pressed correct Alphabte',expectedAlphabate);
        //get the current score
        //life
        const currentScoreElemnent = document.getElementById('current-score');
        const currentScoreText =currentScoreElemnent.innerText;
       const currentScore = parseInt(currentScoreText);
       console.log(currentScore);

       const newScore = currentScore+1;
       currentScoreElemnent.innerText = newScore;
        //console.log(currentScoreText);
        */
        removeBackgrounColor(expectedAlphabate);
        continueGame();
     }
     else{
        console.log('missed life');

        //---------------------------
        //get the current life number
       /* const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
       // console.log(currentLife);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;*/

       /* const currentLifeElemnent = document.getElementById('current-life');
        const currentlifeText =currentLifeElemnent.innerText;
       const currentlife = parseInt(currentlifeText);
       console.log(currentlife);

       const newLife = currentlife-1;
       currentLifeElemnent.innerText = newLife;
        //console.log(currentScoreText);*/
      const currentLife = getElementValueById('current-life')
      const updateLife = currentLife-1;
      setElementValueById('current-life',updateLife);
      if(updateLife === 0){
        gameOver()
      }

     }
    }  



//capture keyboard key press
document.addEventListener('keyup',handleKeyButton)




function continueGame(){
//random Alphabate
const alphabate = getRAndomAlphabate();
//console.log('Your random alphabate:',alphabate);

// set regenarate alphabate;
const currentAphabateElement = document.getElementById('curretnt-Alphabate');
currentAphabateElement.innerText=alphabate;

//set background colour
BackgrounColor(alphabate);
}


function playGame(){
    //hide the home screen
/*const homeSection =   document.getElementById('home-screen');
//console.log(homeSection.classList);
homeSection.classList.add('hidden')
    //show the playground
const playgroundSection = document.getElementById('play-ground');
playgroundSection.classList.remove('hidden')*/
hideElement('home-screen');
hideElement('final-result')
showElement('play-ground');
continueGame();
}
function gameOver(){
hideElement('play-ground');
showElement('final-result')
}
