const comparaison = {
  b0:[ "lettuce", "meat", "cheese", "pickles", "onion", "tomato", "lettuce"],
  b1:[ "cheese", "lettuce", "tomato", "meat", "cheese"],
  b2:["lettuce", "meat", "cheese", "meat", "cheese", "lettuce", "tomato"],
  b3:[ "lettuce", "tomato", "meat", "cheese","ketchup", "meat", "cheese", "onion", "tomato", "lettuce"],
  b4:["lettuce", "pickles", "tomato", "meat", "cheese", "onion", "pickles", "onion", "meat", "cheese", "tomato", "lettuce"],
  b5:["cheese", "meat", "cheese", "lettuce", "tomato"],
  b6:["lettuce","cheese", "meat", "cheese", "tomato", "lettuce", "onion","lettuce"],
  b7:["lettuce", "meat", "cheese", "pickles", "onion", "tomato"],
  b8:["lettuce", "tomato", "meat", "cheese", "onion", "ketchup"]
}
const targetBurger = RandomBurger();
var score = parseInt(localStorage.getItem('gameScore')) || 0;
var encours = true;
const playerBurger = [];



function addContainer(ingredient) {
  if (!encours){
    return ;
  }
    const burger = document.getElementById('burger');
    const newIngredient = document.createElement('div');
    playerBurger.push(ingredient);

    if (ingredient == "pickles") {
      const picklesGroup = document.createElement('div');
      picklesGroup.className = 'pickles-group';
      for (let i = 0; i < 3; i++) {
          const picklesSlice = document.createElement('div');
          picklesSlice.className = 'pickles'; 
          picklesGroup.appendChild(picklesSlice);
          }
      burger.insertBefore(picklesGroup, burger.firstElementChild);
      return;
    }

    newIngredient.className = ingredient;
    burger.insertBefore(newIngredient, burger.firstElementChild);
}

function End(){
  if (encours){
    const burger = document.getElementById('burger');
    const topBun = document.createElement('div');
    topBun.className = 'bun-top';
    burger.insertBefore(topBun, burger.firstElementChild);
    encours = false;
    const endButton = document.getElementById('end-btn');
    const submitButton = document.getElementById('submit-btn');
    endButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
    
  }
}

function check(){
  const main = document.getElementById('main');
  const popup = document.getElementById('popup');
  main.style.opacity = '0.1';
  popup.style.display = 'block';
  if(getResult()){
    score += 1;
    localStorage.setItem('gameScore', score);
    const popupMessage = document.getElementById('won');
    popupMessage.classList.remove('popup-hide');
  }
  else{
    const popupMessage = document.getElementById('lost');
    popupMessage.classList.remove('popup-hide');
  }
  const scoreDisplays = document.getElementsByClassName("score");

  for (let i = 0; i < scoreDisplays.length; i++) {
      scoreDisplays[i].textContent = `Score: ${score}`;
  }
}

function RandomBurger(){
  const keys = Object.keys(comparaison);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return {
    id: randomKey,                   
    ingredients: comparaison[randomKey] 
  };
}

function getResult(){
  if (playerBurger.length !== targetBurger.ingredients.length) {
    return false;
  }
  return JSON.stringify(targetBurger.ingredients) === JSON.stringify(playerBurger);
}

function startGame(){
  score=0;
  const startDiv = document.getElementById('start');
  startDiv.style.display = 'none';
  const creationBurgerSection = document.getElementById('creation-burger');
  creationBurgerSection.style.display = 'flex';
  const targetImage = document.getElementById('target-image');
  const burgerPreview=document.getElementById('burger-preview');
  burgerPreview.style.display='none';
  targetImage.src = `/images/Game/${targetBurger.id}.png`;
  encours=false;
  const targetBurgerDiv = document.getElementById('target-burger');
  setTimeout(()=> {targetBurgerDiv.style.display = 'none';
                    encours=true;
                  burgerPreview.style.display='block';}
            ,10000);
}

function continueGame(){
  const startDiv = document.getElementById('start');
  startDiv.style.display = 'none';
  const creationBurgerSection = document.getElementById('creation-burger');
  creationBurgerSection.style.display = 'flex';
  const targetImage = document.getElementById('target-image');
   const burgerPreview=document.getElementById('burger-preview');
  burgerPreview.style.display='none';
  targetImage.src = `/images/Game/${targetBurger.id}.png`;
  encours=false;
  const targetBurgerDiv = document.getElementById('target-burger');
  setTimeout(()=> {targetBurgerDiv.style.display = 'none';
                    encours=true;
                  burgerPreview.style.display='block';}
            ,10000);
}

console.log(targetBurger);

function ToHome(){

  window.location.href = "index.html";

}

function NextRound(){
  window.location.reload();
}

