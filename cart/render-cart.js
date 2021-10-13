import { rocks } from '../data/rocks.js';
import { cart } from '../data/cart-data.js';
import { findById, calcOrderTotal } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

//create elements here
const orderTotal = document.getElementById('order-total');
const tableBody = document.getElementById('table-body');
orderTotal.textContent = calcOrderTotal(cart, rocks);

for (let cartItem of cart){
    const rockData = findById(cartItem.id, rocks);
    const tr = renderLineItems(cartItem, rockData);
    tableBody.appendChild(tr);
}


