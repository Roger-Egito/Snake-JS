import { game } from '../game.js'
import { generateRandomGridPosition } from '../grid.js'
import { updateScore } from '../level.js';

function drawSwallow() {

}

function eatFood() {
    game.snake.size += game.snake.growth;

    for (let i = 0; i < game.snake.growth; i++) {
        drawSwallow();
        game.snake.body.push({ ...game.snake.body[game.snake.size - 1] })
    }

    updateScore();

    game.food.list.normal.body.push(generateRandomGridPosition());

    let foodNotRendered = game.food.list.normal.level - game.food.list.normal.body.length;

    while (foodNotRendered) {
        game.food.list.normal.body.push(generateRandomGridPosition());
        foodNotRendered = game.food.list.normal.level - game.food.list.normal.body.length;
    }

}

export function updateFood() {

    const foodList = game.food.list.normal.body;
    const snakeBody = game.snake.body;

    if (foodList.length === 0) {
        foodList.push(generateRandomGridPosition());
    }

    for (let item in foodList) {
        if (foodList[item].x == snakeBody[0].x && foodList[item].y == snakeBody[0].y) {

            foodList.splice(parseInt(item), 1);
            eatFood();
        }
    }
}

export function drawFood(gameBoard) {

    const foodElement = [];

    for (let i = 0; i < game.food.list.normal.body.length; i++) {
        foodElement.push(document.createElement('div'))

        foodElement[i].style.gridRowStart = game.food.list.normal.body[i].y
        foodElement[i].style.gridColumnStart = game.food.list.normal.body[i].x
        foodElement[i].classList.add('food')
        gameBoard.appendChild(foodElement[i])

    }
}