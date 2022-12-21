import { world } from 'mojang-minecraft'

world.events.tick.subscribe((ev) => {
 for (let player of world.getPlayers()) {
  const inv = player.getComponent("inventory").container;
  const item = inv.getItem(player.selectedSlot);
  if (item.id === 'pixel:iron_greatsword'){
    player.runCommand(                      "/execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"grtswrd_tm\"}}]}",)
    } else if (item.id === 'pixel:iron_saber'){
    player.runCommand(                      "/execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"sbr_tm\"}}]}")
  } else{ player.runCommand(                      "/execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}}]}")}
})
