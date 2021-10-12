import { renderRock } from './render-rocks.js';
import { rocks } from './data/rocks.js';

const productList = document.getElementById('product-list');

for (let rock of rocks){
    const rockCard = renderRock(rock);
    productList.append(rockCard);
}

