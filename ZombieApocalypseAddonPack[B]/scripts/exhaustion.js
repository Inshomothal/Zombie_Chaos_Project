import * as Minecraft from "mojang-minecraft";
import { getScore } from "./lib/getScore.js";

const TICKS_IN_TWO_SECONDS = 20 * 2;

Minecraft.world.events.tick.subscribe((eventData) => {
  const { currentTick } = eventData;

  if (currentTick % TICKS_IN_TWO_SECONDS !== 0) return;

  let players = Minecraft.world.getPlayers();

  for (let player of players) {
    let exLim = getScore("exhaust_lim", player, { minimun: 0, maximum: 10000 });
    let exht = getScore("exhaust", player, { minimun: 0, maximum: 10000 });

    if (exht === exLim) {
      return;
    }

    if (exht > exLim) {
      player.runCommand(`scoreboard players set @s exhaust ${exLim}`);
      return;
    }

    if (exht < exLim) {
      player.runCommand(
        `scoreboard players add @s[scores={exhaust=!${exLim}}] exhaust 1`
      );
      return;
    }
  }
});
module.exports = {
  eventData,
};
