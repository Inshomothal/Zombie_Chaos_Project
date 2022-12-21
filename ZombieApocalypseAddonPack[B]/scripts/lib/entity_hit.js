import { world } from 'mojang-minecraft'

world.events.entityHit.subscribe(object => {
    // Properties from class
    let { hitEntity, entity } = object;

    // If it's not a player then ignore
    if (!(entity instanceof Player)) {
        return;
    }

    // Entity coordinates
    let { x, y, z } = hitEntity.location;
    // Player coordinates
    let { x1, y1, z1 } = entity.location;

    // Player's coordinates return undefined, but why?
    entity.runCommand(`title @s actionbar ${x1} ${y1} ${z1}`);
})
