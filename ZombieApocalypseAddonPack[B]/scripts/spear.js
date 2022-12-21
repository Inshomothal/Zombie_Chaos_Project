import { world } from 'mojang-minecraft'

world.events.tick.subscribe((ev) => {
 for (let player of world.getPlayers()) {
  const inv = player.getComponent("inventory");.container;
  const item = inv.getItem(player.selectedSlot);
  
    if (!item){
      return;
    }
    
  if (item.id !== 'pixel:netherite_spear' && item.id !== 'pixel:diamond_spear' && item.id !== 'pixel:golden_spear' && item.id !== 'pixel:iron_spear'){
        player.runCommand("execute @s ~~~ function no_spears");return;
    } else if (item.id === 'pixel:iron_spear'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");return;
    }else if (item.id === 'pixel:golden_spear'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");return;
    }else if (item.id === 'pixel:wooden_spear'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");return;
    }
    if (item.id === 'pixel:stone_spear'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");return;
    }
    if (item.id === 'pixel:diamond_spear'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");return;
    }else if (item.id === 'pixel:netherite_spear'){
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");return;
    } else if (!item){
        player.runCommand("execute @s ~~~ function no_spears");return;
        break;
    }
  }
})