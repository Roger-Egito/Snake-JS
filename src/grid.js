import { game } from "./game.js";

export function generateRandomGridPosition() {

    let randomGridPosition;

    let occupiedGridPositions = [...game.snake.body];

    for (let item in game.food.list) {
        occupiedGridPositions.push(...game.food.list[item].body);
    }

    for (let item in game.hazard.list) {
        occupiedGridPositions.push(...game.hazard.list[item].body);
    }

    while (randomGridPosition === undefined || occupiedGridPositions.some(occupiedGridPosition => {
        return (occupiedGridPosition.x === randomGridPosition.x && occupiedGridPosition.y === randomGridPosition.y);
    })) {
        randomGridPosition = {
            x: Math.floor(Math.random() * 21) + 1,
            y: Math.floor(Math.random() * 21) + 1,
        }
    }

    occupiedGridPositions = [];
    return randomGridPosition;
}