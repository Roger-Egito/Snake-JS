import { game } from "./game.js"
import { updateHazard } from "./hazard.js";

export function changeBackgroundColor() {
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

    const gameBoard = document.getElementById('game-board');

    const colors = [
        "#dbd9f5",
        "#a2caac",
        "#fadebb",
        "black",
        "#cccccc",
    ];

    let randomNumber;

    const backgroundColor = rgb2hex((window.getComputedStyle(document.getElementById('game-board')).getPropertyValue('background-color')));

    while (colors[randomNumber] == null || colors[randomNumber] == backgroundColor) {
        randomNumber = Math.round(Math.random() * (colors.length - 1));
    }

    gameBoard.style.background = colors[randomNumber];
}

/* export function upgradeRandom() {
    if (Math.random() % 2) {
        upgradeRandomFood();
    } else {
        upgradeRandomHazard();
    }
} */

export function updateLevel() {
    game.level = Math.ceil((game.snake.size + 1) / 10);
    game.levelUpSize += 10;
    changeBackgroundColor();

    updateHazard();
}

export function updateScore() {
    game.score += (game.snake.size - 1) * game.snake.speed * game.level;

    if (game.score > game.highScore) {
        game.highScore = game.score;
    }

    if (game.score >= game.levelUpSize - 5) {
        /* upgradeRandom(); */
    }

    if (game.snake.size >= game.levelUpSize) {
        updateLevel();
    }
}