var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function generatePrice(){
  return Math.floor(Math.random() * 100) + 1  
}

function addToCart(item) {
 // write your code here
 cart.push({"itemName":item,"itemPrice":generatePrice()})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var empty = ["In your cart, you have "];
  if(cart.length===0){
    return "Your shopping cart is empty."
  }
  for(var i =0;i<cart.length;i++){
    if(i===cart.length-1){
      empty.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`)
    }else{
      
    }
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
