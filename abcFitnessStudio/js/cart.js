let cart = {};

function openCart() {
   document.getElementById('cartModal').style.display = 'block';
   document.getElementById('cartOverlay').style.display = 'block';
   updateCartView();
}

function closeCart() {
   document.getElementById('cartModal').style.display = 'none';
   document.getElementById('cartOverlay').style.display = 'none';
}

function updateCart(item, change) {
   if (!cart[item]) {
      cart[item] = 0;
   }
   cart[item] += change;
   if (cart[item] <= 0) {
      delete cart[item];
   }
   updateCartView();
}

function updateCartView() {
   const cartList = document.getElementById('cartItems');
   cartList.innerHTML = Object.keys(cart).length ? 
      Object.entries(cart).map(([item, quantity]) => `<li>${item} x${quantity}</li>`).join('') : 
      '<li>Cart is empty</li>';
   localStorage.getItem('cartList')
}

function clearCart() {
   cart = {};
   updateCartView();
}

function processOrder() {
   if (Object.keys(cart).length === 0) {
      alert('Your cart is empty.');
   } else {
      alert('Thank you for your order!');
      clearCart();
      closeCart();
   }
}