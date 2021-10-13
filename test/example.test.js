import { renderRock } from '../render-rocks.js';
import { rocks } from '../data/rocks.js';
import { findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';
import { cart } from '../cart/cart.js';
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
    const rockData = findById(cart[0].id, rocks);
    console.log(rockData)
    const expected = `<tr><td>chrysoprase</td><td>5</td><td>6</td><td>30</td></tr>`;
    const actual = renderLineItems(cart[0], rockData).outerHTML;
    console.log(actual)
    expect.deepEqual(actual, expected);
});
