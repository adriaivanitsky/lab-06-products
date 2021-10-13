import { rocks } from '../data/rocks.js';
import { cart } from '../data/data-cart.js';
import { findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';
//create elements here

const tableBody = document.getElementById('table-body');
for (let cartItem of cart){
    const rockData = findById(cartItem.id, rocks);
    const tr = renderLineItems(cartItem, rockData);
    tableBody.appendChild(tr);
}


