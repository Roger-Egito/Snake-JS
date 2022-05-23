import { gameOver } from "../game-over.js";

import { game } from '../game.js'

function touchEnemy() {
    gameOver();
}

export function updateEnemy() {

    const enemyArmy = game.hazard.list.enemy.body;
    const snakeHead = game.snake.body[0];

    if (enemyArmy.length === 0) {
        game.hazard.list.enemy.activated = false;

        game.hazard.list.enemy.body = [{
            x: Math.floor(Math.random() * 21) + 1,
            y: Math.floor(Math.random() * 21) + 1,
            speed: 0,
            direction: null,
        }]
    }

    for (let soldier in enemyArmy) {
        if (enemyArmy[soldier].x == snakeHead.x && enemyArmy[soldier].y == snakeHead.y) {
            enemyArmy.splice(enemyArmy[soldier]);
            touchEnemy();
        }

        if (enemyArmy[soldier].speed === 0) {
            window.clearInterval(game.hazard.list.enemy.interval);

            const possibleDirections = [
                'up', 'left', 'down', 'right'
            ];

            const randomDirection = Math.round(Math.random() * (possibleDirections.length - 1));

            enemyArmy[soldier].direction = possibleDirections[randomDirection];
            enemyArmy[soldier].speed = 5 * game.hazard.list.enemy.level;

        }

        const direction = enemyArmy[soldier].direction;

        if (direction === 'up') {
            if (enemyArmy[soldier].y === 1) {
                enemyArmy.splice(enemyArmy[soldier]);
            } else {
                enemyArmy[soldier].y -= 1;
            }
        }
        if (direction === 'left') {
            if (enemyArmy[soldier].x === 1) {
                enemyArmy.splice(enemyArmy[soldier]);
            } else {
                enemyArmy[soldier].x -= 1;
            }
        } if (direction === 'down') {
            if (enemyArmy[soldier].y === 21) {
                enemyArmy.splice(enemyArmy[soldier]);
            } else {
                enemyArmy[soldier].y += 1;
            }
        } if (direction === 'right') {
            if (enemyArmy[soldier].x === 21) {
                enemyArmy.splice(enemyArmy[soldier]);
            } else {
                enemyArmy[soldier].x += 1;
            }
        }
    }
}

export function drawEnemy(gameBoard) {
    const enemyElement = document.createElement('div')

    for (let soldier in game.hazard.list.enemy.body) {
        enemyElement.style.gridRowStart = game.hazard.list.enemy.body[soldier].y
        enemyElement.style.gridColumnStart = game.hazard.list.enemy.body[soldier].x
        enemyElement.classList.add('enemy')
        gameBoard.appendChild(enemyElement)
    }
}