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

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });