import { world } from 'mojang-minecraft'

export function getScore(objective, player, { minimum, maximum } = {}) {
    const data = player.runCommand(`scoreboard players test ${player.nameTag.startsWith('"') ? player.nameTag : `"${player.nameTag}"`} ${objective} ${minimum ? minimum : '*'} ${maximum ? maximum : '*'}`);
    if (data.error) {
        return;
    }
    return parseInt(data.statusMessage.match(/-?\d+/)[0]);
}