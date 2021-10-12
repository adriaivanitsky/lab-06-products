import { renderRock } from './render-rocks.js';
import { rocks } from './rock.js';

const rockList = document.getElementById('rock-list');

for (let rock of rocks){
    const rockCard = renderRock(rock);
    rockList.append(rockCard);
}

