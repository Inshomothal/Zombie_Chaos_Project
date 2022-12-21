import { world } from 'mojang-minecraft'

world.events.tick.subscribe((ev) => {
 for (let player of world.getPlayers()) {
  const inv = player.getComponent("inventory").container;
  const item = inv.getItem(player.selectedSlot);
    if (!item){
      return;
    }
  if (item.id === 'pixel:giant_mace'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:iron_greatsword'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:stone_greatsword'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:netherite_greatsword'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:iron_halberd'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:golden_halberd'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    player.runCommand("execute @s ~~~ function handblock")
    } else if (item.id === 'pixel:wooden_halberd'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:stone_halberd'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:diamond_halberd'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:netherite_halberd'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:iron_odachi'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:iron_odachi_vltsb'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:iron_odachi_rndtsb'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:pole_hammer'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:iron_odachi_rnsmtsb'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:bec_de_corbin'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === 'pixel:bec_de_corbin_back'){
    player.runCommand("execute @s ~~~ function handblock")
    return;
    } else if (item.id === error){
    player.runCommand("execute @s ~~~ function noblock")
    return;
    }
  }
})
