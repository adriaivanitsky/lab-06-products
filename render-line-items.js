export function renderLineItems(cartItem, rockData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = rockData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = rockData.price;

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.quantity * rockData.price;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;



}