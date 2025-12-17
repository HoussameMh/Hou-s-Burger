
var encours = true;
var nbrIngredients = 0;

function addContainer(ingredient) {
  nbrIngredients += 1;
  
  if (!encours){
    return ;
  }
    const burger = document.getElementById('burger');
    const newIngredient = document.createElement('div');

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

function removeContainer(ingredient) {
  nbrIngredients -= 1;
  
  if (!encours){
    return ;
  }
  const burger = document.getElementById('burger');
  if(ingredient=='pickles'){
    const picklesGroup=burger.querySelectorAll(`div.pickles-group`);
    if(picklesGroup.length){ picklesGroup[0].remove()};
    return;
  }
  const myIngredient=burger.querySelectorAll(`div.${ingredient}`)
  
  if(myIngredient.length){ myIngredient[0].remove()};
  
 
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

function Submit(){
  const main = document.getElementById('main');
  const popup = document.getElementById('popup');
  main.style.opacity = '0.1';
  popup.style.display = 'block';

  if(nbrIngredients>15){
    const popupMessage = document.getElementById('over-burger');
    popupMessage.classList.remove('popup-hide');
    return;
  }
  else if (nbrIngredients>=10){
    const popupMessage = document.getElementById('big-burger');
    popupMessage.classList.remove('popup-hide');
    return;
  }
  else{
    const popupMessage = document.getElementById('normal-burger');
    popupMessage.classList.remove('popup-hide');
    return;
  }

}

function reloadPage(){
    location.reload();
}
function toGamePage(){
    window.location.href = "game.html";
}

