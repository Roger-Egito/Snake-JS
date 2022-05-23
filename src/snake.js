import { getInputDirection } from "./input.js";
import { game } from "./game.js";

export function clearSnake() {
    const newSnakeBody = [game.snake.body[0]];
    game.snake.size = 1;
    game.snake.body = newSnakeBody;
}

export function updateSnakeDirection() {
    const inputDirection = getInputDirection()
    for (let i = game.snake.body.length - 2; i >= 0; i--) {
        game.snake.body[i + 1] = { ...game.snake.body[i] }
    }

    if (game.snake.body[0].x === 1 && inputDirection.x === -1) {
        game.snake.body[0].x = 21;
    }
    else if (game.snake.body[0].x === 21 && inputDirection.x === +1) {
        game.snake.body[0].x = 1;
    } else (
        game.snake.body[0].x += inputDirection.x
    )

    if (game.snake.body[0].y === 1 && inputDirection.y === -1) {
        game.snake.body[0].y = 21;
    }
    else if (game.snake.body[0].y === 21 && inputDirection.y === +1) {
        game.snake.body[0].y = 1;
    } else (
        game.snake.body[0].y += inputDirection.y
    )
}

export function draw(gameBoard) {
    game.snake.body.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        if (segment == game.snake.body[0]) {
            snakeElement.classList.add('head');
        }
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function onSnake(position) {
    return game.snake.body.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

export function isSnakeIntersecting() {
    for (let i = 4; i < game.snake.size; i++) {
        if (game.snake.body[0].x === game.snake.body[i].x && game.snake.body[0].y === game.snake.body[i].y) {
            return true;
        }
    }
}