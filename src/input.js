import { gameOver } from './game-over.js';
import { game } from './game.js';

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break

        case '1':
            gameOver();
            break

        case '2':
            if (game.snake.speed > 5) { game.snake.speed -= 5 };
            break

        case '3':
            if (game.snake.speed < 100) { game.snake.speed += 5 };
            break

        case '4':
            if (game.snake.growth > 1) { game.snake.growth -= 1 };
            break

        case '5':
            if (game.snake.growth < 20) { game.snake.growth += 1 };
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}