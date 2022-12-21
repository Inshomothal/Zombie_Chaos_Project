import { world } from 'mojang-minecraft'

world.events.tick.subscribe((ev) => {
 for (let player of world.getPlayers()) {
    let om = player.getComponent("inventory").container.getItem(player.selectedSlot);
    let Freed = om ? om.id.split(":")[1] : null;
    
    if (!Freed) {
      return;
    }

    if (Freed && Freed.toLowerCase().includes("mace")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"mc_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("longsword")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"ls_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("katana")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"ktn_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("rapier")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"rpr_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("glaive")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"glv_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("greatsword")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"grtswrd_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("spear")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"spr_tm\"}}]}");
    return
    }
    if (Freed && Freed.toLowerCase().includes("lance")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("halberd")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"hld_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("dagger")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"dgr_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("katar")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"ktr_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("lance")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"lnc_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("sabre")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"sbr_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("polehammer")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"ph_tm\"}}]}");
    return;
    }
    if (Freed && Freed.toLowerCase().includes("bec_de_corbin")) {
    player.runCommand("execute @s ~ ~ ~ titleraw @s actionbar {\"rawtext\":[{\"text\":\"§3ex:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust\"}},{\"text\":\"§r/\"},{\"score\":{\"name\":\"@s\",\"objective\":\"exhaust_lim\"}},{\"text\":\" §6cd:\"},{\"score\":{\"name\":\"@s\",\"objective\":\"bdc_tm\"}}]}");
    return;
    }
  }
});
