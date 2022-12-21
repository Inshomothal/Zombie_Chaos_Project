import "scripts/exhaustion.js";
import { world } from "mojang-minecraft";

world.events.beforeWatchdogTerminate.subscribe(data => {
  data.cancel = true;
});
