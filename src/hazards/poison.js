import { gameOver } from "../game-over.js";

import { game } from '../game.js'
import { generateRandomGridPosition } from '../grid.js'

function eatPoison() {

    gameOver();

    game.hazard.list.poison.body.push(generateRandomGridPosition());
}

export function updatePoison() {

    const poisonList = game.hazard.list.poison.body;
    const snakeBody = game.snake.body;

    for (let item in poisonList) {
        for (let part in snakeBody) {
            if (poisonList[item].x == snakeBody[part].x && poisonList[item].y == snakeBody[part].y) {
                poisonList.splice(poisonList[item]);
                eatPoison();
            }
        }
    }
}

export function drawPoison(gameBoard) {
    const poisonElement = document.createElement('div')

    for (let item in game.hazard.list.poison.body) {
        poisonElement.style.gridRowStart = game.hazard.list.poison.body[item].y
        poisonElement.style.gridColumnStart = game.hazard.list.poison.body[item].x
        poisonElement.classList.add('poison')
        gameBoard.appendChild(poisonElement)
    }
}