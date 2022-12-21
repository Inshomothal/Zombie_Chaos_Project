import { world as World, Items, ItemStack } from "mojang-minecraft";

World.events.tick.subscribe((ev) => {
  let players = World.getPlayers();
  for (let player of players) {
    let inventory = player.getComponent("minecraft:inventory").container;

    for (let i = 0; i < inventory.size; i++) {
      let slot = inventory.getItem(i);

       if (slot?.id === "pixel:stone_greatsword") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:iron_greatsword") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:golden_greatsword") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:diamond_greatsword") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:netherite_greatsword") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:wooden_halberd") {player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:stone_halberd") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:iron_halberd") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:golden_halberd") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:diamond_halberd") {
        player.runCommand("execute @s ~~~ function handblock")
      } else if (slot?.id === "pixel:netherite_halberd") {
        player.runCommand("execute @s ~~~ function handblock")
      } else {
        player.runCommand("execute @s ~~~ function noblock")
      }
    } 
  }
});