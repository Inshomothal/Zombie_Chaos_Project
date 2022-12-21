import { world, System } from "@minecraft/server";

var exhaustion = require("./exhaustion");

let tickIndex = 0;

function MainTick() {
  try {
    tickIndex++;

    if (tickIndex === 100) {
      world
        .getDimension(`overworld`)
        .runCommandAsync(`say Hello World...Finally!`);
    }
  } catch {
    console.warn(`Script Error: ` + e);
  }

  system.run(MainTick);
}

/*
System.events.beforeWatchdogTerminate.subscribe((data) => {
  data.cancel = true;
});
*/
System.run(MainTick);
