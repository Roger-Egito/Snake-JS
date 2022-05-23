import { game } from "./game.js";

export function deactivateAllHazards() {
    const hazards = game.hazard.list;

    for (let item in hazards) {
        hazards[item].activated = false;
        hazards[item].level = 0;

        game.hazard.list.enemy.body = [{
            x: Math.floor(Math.random() * 21) + 1,
            y: Math.floor(Math.random() * 21) + 1,
            speed: 0,
            direction: null,
        }]
    }
}

export function updateHazard() {
    const hazards = game.hazard.list;

    if (game.hazard.activated) {
        const availableHazards = [];

        for (let item in hazards) {
            if (!hazards[item].activated) {
                availableHazards.push(item);
            }
        }

        if (availableHazards.length === 0) {
            return;
        }

        const randomHazardNumber = Math.round(Math.random() * (availableHazards.length - 1));

        hazards[availableHazards[randomHazardNumber]].activated = true;
        hazards[availableHazards[randomHazardNumber]].level += 1;
    }
}