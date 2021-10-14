import { toUSD } from './utils.js';

export function renderLineItems(cartItem, rockData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = rockData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(rockData.price);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = toUSD(cartItem.qty * rockData.price);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;



}