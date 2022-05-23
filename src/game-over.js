import { game } from "./game.js";
import { changeBackgroundColor } from "./level.js";
import { clearSnake } from "./snake.js";
import { deactivateAllHazards } from "./hazard.js";

export function gameOver() {
    clearSnake();
    changeBackgroundColor();
    deactivateAllHazards();
    game.score = 0;
    game.level = 1;
    game.levelUpSize = 10;
}