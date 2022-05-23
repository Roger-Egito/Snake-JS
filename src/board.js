import { game } from "./game.js";

export function drawScore() {
    const snakeSizeElement = document.getElementById('snake-size');
    const snakeSpeedElement = document.getElementById('snake-speed');
    const snakeGrowthElement = document.getElementById('snake-growth');
    const snakeScoreElement = document.getElementById('snake-score');
    const snakeLevelElement = document.getElementById('snake-level');
    const snakeHighScoreElement = document.getElementById('snake-high-score');

    snakeSizeElement.textContent = 'Size: ' + game.snake.size;
    snakeSpeedElement.textContent = 'Speed: ' + game.snake.speed;
    snakeGrowthElement.textContent = 'Growth: ' + game.snake.growth;
    snakeScoreElement.textContent = 'Score: ' + game.score;
    snakeLevelElement.textContent = 'Level: ' + game.level;
    snakeHighScoreElement.textContent = 'High Score: ' + game.highScore;
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