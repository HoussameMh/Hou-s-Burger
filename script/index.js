
var cart_items = parseInt(localStorage.getItem('cart-items')) || 0;
const count= document.getElementById('cart-items');
count.textContent= cart_items;
let is_opened=false;
function addToCart(){
  cart_items++;
  localStorage.setItem('cart-items', cart_items);
  count.textContent= cart_items
  
}

function removeCart(){
  if(count.textContent > 0){
    cart_items --;
  localStorage.setItem('cart-items', cart_items);
  count.textContent= cart_items
  }
}   

function ouvreMenu(){
  if(!is_opened){
    const submenu=document.getElementById('submenu');
    submenu.style.display='flex';
    is_opened=true
  }else{
    const submenu=document.getElementById('submenu');
    submenu.style.display='none';
    is_opened=false
  }
  
}

function fermeMenu(){
  if(is_opened){
    const submenu=document.getElementById('submenu');
    submenu.style.display='none';
  }
}