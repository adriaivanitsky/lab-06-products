// import { rocks } from '../data/rocks.js';
import { getProducts } from '../utils.js';
import { findById, calcOrderTotal, getCart, clearCart, toUSD } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

//create elements here
const rocks = getProducts();
const orderTotal = document.getElementById('order-total');
const tableBody = document.getElementById('table-body');
const cart = getCart();
const placeOrder = document.getElementById('place-order');
orderTotal.textContent = toUSD(calcOrderTotal(cart, rocks));
if (cart.length <= 0){
    placeOrder.disabled = true;
}


for (let cartItem of cart){
    const rockData = findById(cartItem.id, rocks);
    const tr = renderLineItems(cartItem, rockData);
    tableBody.appendChild(tr);
}

placeOrder.addEventListener('click', ()=> {
    // alert(JSON.stringify(cart, true, 2));
    clearCart();
    window.location.replace('..');

});

