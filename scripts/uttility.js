function hideElement(elementId){
    const elemnent = document.getElementById(elementId);
    elemnent.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function BackgrounColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-700');
}
function removeBackgrounColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-700');
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}
function setElementValueById(elementId,value){
const element = document.getElementById(elementId);
element.innerText = value;
}

function getRAndomAlphabate(){
    // get an alphabate
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
   const alphabate = alphabateString.split('');
   console.log(alphabate);

   // get a random index
   const randomNumber = Math.random() * 25;
   const index = Math.round(randomNumber);
  
   const alphabates= alphabate[index];
   //console.log(alphabates,index);
   return alphabates;
}