import { world, BlockLocation } from "mojang-minecraft";

export function scoreboardExists(scoreboardName) {
  let scoreboards = "";
  let w = world.getDimension("overworld");
  
  try {
    scoreboards = w.runCommand(`scoreboard objectives list`).statusMessage;
  } catch (e) {}
  
  return scoreboards.match(/ (.*?):/g) ? scoreboards.match(/ (.*?):/g).map(i => i.replace(":", "").trim()).indexOf(scoreboardName) > -1 : false;
}


export function getPlayersInScoreboard(scoreboard, players) {
  let commandInfo = [];
  let playersInScoreboard = [];
  let w = world.getDimension("overworld");
  
  for (let i in players) {
    try  {
      let info = w.runCommand(`scoreboard players list @a[name = "${players[i].name}"]`).statusMessage;
      
      
      commandInfo.push({
        info: info,
        player: players[i]
      });
      
      for (let j in commandInfo) {
        let score = commandInfo[j].info.toLowerCase().split(scoreboard)[1] ? commandInfo[j].info.toLowerCase().split(scoreboard)[1].match(/ ([0-9].*?) \(/)[1] : undefined;
        
        if (score) {
          playersInScoreboard.push(players[j].name);
        }
        
      }
    } catch (e) {}
    return playersInScoreboard;
  }
}
