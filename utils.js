import { rocks } from './data/rocks.js';

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

export function toUSD(value) {
    return value.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

//get products from local storage
//if there is nothing in local storage, then save the productlist in local storage
//return product 
export function getProducts(){
    const productString = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(productString);
    if (!products){
        const rockString = JSON.stringify(rocks);
        localStorage.setItem('PRODUCTS', rockString);
    }
    return products || rocks;
}

export function addProduct(newRock){
    let products = getProducts();
    products.push(newRock);
    let productString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productString);
}