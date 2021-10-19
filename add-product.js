import { addProduct } from './utils.js';
const form = document.getElementById('product-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
    const newRock = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        price: Number(data.get('price'))
    };
    addProduct(newRock);
    alert('new rock added');
    form.reset();
});