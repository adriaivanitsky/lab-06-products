import { renderRock } from './render-rocks.js';
// import { rocks } from './data/rocks.js';
import { getProducts } from './utils.js';

const productList = document.getElementById('product-list');
const rocks = getProducts();

for (let rock of rocks){
    const rockCard = renderRock(rock);
    productList.append(rockCard);
}

