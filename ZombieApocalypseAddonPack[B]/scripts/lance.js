import { world } from 'mojang-minecraft'

world.events.tick.subscribe((ev) => {
 for (let player of world.getPlayers()) {
  const inv = player.getComponent("inventory").container;
  const item = inv.getItem(player.selectedSlot);
    if (!item){
      return;
    }
  
  if (item.id !== 'pixel:netherite_lance' && item.id !== 'pixel:diamond_lance' && item.id !== 'pixel:golden_lance' && item.id !== 'pixel:iron_lance' && item.id !== 'pixel:stone_lance' && item.id !== 'pixel:wooden_lance'){
        player.runCommand("execute @s ~~~ function no_lances")
    } else if (item.id === 'pixel:iron_lance'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}")
    }else if (item.id === 'pixel:golden_lance'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}")
    }else if (item.id === 'pixel:wooden_lance'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}")
    }else if (item.id === 'pixel:stone_lance'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}")
    }else if (item.id === 'pixel:diamond_lance'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}")
    } else if (item.id === 'pixel:netherite_lance'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}")
    } else if (!item){
        player.runCommand("execute @s ~~~ function no_lances")
        break;
    }
  }
})