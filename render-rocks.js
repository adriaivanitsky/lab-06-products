import { addItem } from './utils.js';

export function renderRock(rock){
    const rockCard = document.createElement('div');
    rockCard.classList.add('rock-card');

    const rockHeader = document.createElement('h2');
    rockHeader.textContent = rock.name;

    const img = document.createElement('img');
    img.src = rock.img;
    
    const button = document.createElement('button');
    button.value = rock.id;
    button.textContent = 'add to cart';
    // button.classList.add('add-button');

    button.addEventListener('click', ()=>{
        addItem(rock.id);
    });
    
    rockCard.append(rockHeader, img, button);
    return rockCard;
}