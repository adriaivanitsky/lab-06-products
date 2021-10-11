export function renderRock(rock){
    const rockCard = document.createElement('div');
    rockCard.classList.add('rock-card');

    const rockHeader = document.createElement('h2');
    rockHeader.textContent = rock.name;

    const img = document.createElement('img');
    img.src = rock.img;

    rockCard.append(rockHeader, img);
    return rockCard;
}