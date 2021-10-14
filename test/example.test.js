import { renderRock } from '../render-rocks.js';
import { rocks } from '../data/rocks.js';
import { addItem, clearCart, findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';
import { getCart } from '../utils.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderRock function', (expect) => {
    const expected = `<div class="rock-card"><h2>chrysoprase</h2><img src="assets/chrysoprase.jpeg"><button value="1">add to cart</button></div>`;
    const chrysoprase = rocks[0];
    const actual = renderRock(chrysoprase).outerHTML;
    expect.equal(actual, expected);
});

test('findById should return the item matching the ID', (expect) => {
    const expected = {
        id: '1',
        name: 'chrysoprase',
        img: 'assets/chrysoprase.jpeg',
        price: 5
    };
    const actual = findById('1', rocks);
    expect.deepEqual(actual, expected);
});

test('render-line-items should return a tr with all our data in it', (expect) => {
    const fakeCart = [{ id:'1', qty: 6 }];
    const rockData = findById(fakeCart[0].id, rocks);
    const expected = `<tr><td>chrysoprase</td><td>5</td><td>6</td><td>30</td></tr>`;
    const actual = renderLineItems(fakeCart[0], rockData).outerHTML;
    expect.deepEqual(actual, expected);
});

test('getCart should return an array of existing cart items', (expect) => {
    addItem('1');
    const cart = getCart();
    const expected = [{ id: '1', qty: 1 }];
    expect.deepEqual(cart, expected);
});

test('getCart should return an empty array if the cart is empty', (expect) => {
    clearCart();
    const cart = getCart();
    expect.deepEqual(cart, []);
});

test('clearCart should empty the cart and return an empty array', (expect) => {
    clearCart();
    const expected = [];
    const cart = getCart();
    expect.deepEqual(cart, expected); 
});

test('addItem should add an item to the cart', (expect) => {
    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});