export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        } 
    }
}

export function calcOrderTotal(cart, rocks){
    let orderTotal = 0;
    for (let item of cart){
        const rock = findById(item.id, rocks);
        orderTotal = orderTotal + rock.price * item.qty;
    }
    return orderTotal;
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else { 
        const lineItem = {
            id: id,
            qty: 1
        };
        cart.push(lineItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);

}

export function clearCart(){
    return localStorage.removeItem('CART');
}