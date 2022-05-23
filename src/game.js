import { updateSnakeDirection, draw as drawSnake, isSnakeIntersecting } from './snake.js'
import { updateFood, drawFood } from './foods/normal-food.js';
import { drawScore } from './board.js';
import { updatePoison, drawPoison } from './hazards/poison.js';

import { gameOver } from './game-over.js';
import { drawEnemy, updateEnemy } from './hazards/enemy.js';

export const game = {
    score: 0,
    highScore: 0,
    level: 1,
    levelUpSize: 10,

    snake: {
        speed: 20,  // Quantas vezes a cobra se mexe por segundo
        body: [{
            x: Math.ceil(21 / 2),
            y: Math.ceil(21 / 2)
        }],
        size: 1,
        growth: 1,
    },

    food: {
        activated: true,
        list: {
            normal: {
                activated: true,
                level: 1,
                body: [],
            },
            blessing: {
                activated: false,
                level: 0,
                body: [],
            }
        }
    },

    hazard: {
        activated: true,
        list: {
            enemy: {
                activated: false,
                level: 0,
                body: [/* {
                    x: Math.floor(Math.random() * 21) + 1,
                    y: Math.floor(Math.random() * 21) + 1,
                    speed: 0,
                    direction: null,
                } */]
            },
            poison: {
                activated: false,
                level: 0,
                body: []
            },
        }
    }
}

const gameBoard = document.getElementById('game-board');

let lastRenderTime = 0;

window.requestAnimationFrame(main);

function main(currentTime) {

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < (1 / game.snake.speed)) return true;

    lastRenderTime = currentTime;

    // A maioria dos jogos funciona com 2 programas principais. Update e Draw. Update é a parte que cuida da lógica e draw é o que pega o resultado e desenha na tela.
    update();
    draw();
}

function update() {
    updateSnakeDirection();
    updateFood();
    isSnakeDead();

    /*     if (game.hazard.list.poison.activated) { updatePoison() };
        if (game.hazard.list.enemy.activated) { updateEnemy() }; */
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawScore();

    /*     if (game.hazard.list.poison.activated) { drawPoison(gameBoard) };
        if (game.hazard.list.enemy.activated) { drawEnemy(gameBoard) }; */
}

function isSnakeDead() {
    if (isSnakeIntersecting()) {
        gameOver();
    };
}