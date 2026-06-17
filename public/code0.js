gdjs.MansionEscapeCode = {};
gdjs.MansionEscapeCode.localVariables = [];
gdjs.MansionEscapeCode.idToCallbackMap = new Map();
gdjs.MansionEscapeCode.GDFloorObjects1= [];
gdjs.MansionEscapeCode.GDFloorObjects2= [];
gdjs.MansionEscapeCode.GDWallObjects1= [];
gdjs.MansionEscapeCode.GDWallObjects2= [];
gdjs.MansionEscapeCode.GDMessageObjects1= [];
gdjs.MansionEscapeCode.GDMessageObjects2= [];
gdjs.MansionEscapeCode.GDHudStatsObjects1= [];
gdjs.MansionEscapeCode.GDHudStatsObjects2= [];
gdjs.MansionEscapeCode.GDScreenPanelObjects1= [];
gdjs.MansionEscapeCode.GDScreenPanelObjects2= [];
gdjs.MansionEscapeCode.GDScreenTitleObjects1= [];
gdjs.MansionEscapeCode.GDScreenTitleObjects2= [];
gdjs.MansionEscapeCode.GDScreenHintObjects1= [];
gdjs.MansionEscapeCode.GDScreenHintObjects2= [];
gdjs.MansionEscapeCode.GDPlayerObjects1= [];
gdjs.MansionEscapeCode.GDPlayerObjects2= [];
gdjs.MansionEscapeCode.GDEnemyObjects1= [];
gdjs.MansionEscapeCode.GDEnemyObjects2= [];
gdjs.MansionEscapeCode.GDKeyObjects1= [];
gdjs.MansionEscapeCode.GDKeyObjects2= [];
gdjs.MansionEscapeCode.GDClosedDoorObjects1= [];
gdjs.MansionEscapeCode.GDClosedDoorObjects2= [];
gdjs.MansionEscapeCode.GDOpenDoorObjects1= [];
gdjs.MansionEscapeCode.GDOpenDoorObjects2= [];
gdjs.MansionEscapeCode.GDVisionLightObjects1= [];
gdjs.MansionEscapeCode.GDVisionLightObjects2= [];
gdjs.MansionEscapeCode.GDKey2Objects1= [];
gdjs.MansionEscapeCode.GDKey2Objects2= [];
gdjs.MansionEscapeCode.GDKey3Objects1= [];
gdjs.MansionEscapeCode.GDKey3Objects2= [];
gdjs.MansionEscapeCode.GDLightItemObjects1= [];
gdjs.MansionEscapeCode.GDLightItemObjects2= [];
gdjs.MansionEscapeCode.GDRepelItemObjects1= [];
gdjs.MansionEscapeCode.GDRepelItemObjects2= [];
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.MansionEscapeCode.GDplain_9595textObjects1= [];
gdjs.MansionEscapeCode.GDplain_9595textObjects2= [];


gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MansionEscapeCode.GDWallObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDClosedDoorObjects1Objects = Hashtable.newFrom({"ClosedDoor": gdjs.MansionEscapeCode.GDClosedDoorObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MansionEscapeCode.GDWallObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MansionEscapeCode.GDEnemyObjects1});
gdjs.MansionEscapeCode.userFunc0x982678 = function GDJSInlineCode(runtimeScene) {
"use strict";
const player = runtimeScene.getObjects("Player")[0];
const message = runtimeScene.getObjects("Message")[0];
const hudStats = runtimeScene.getObjects("HudStats")[0];
const screenPanel = runtimeScene.getObjects("ScreenPanel")[0];
const screenTitle = runtimeScene.getObjects("ScreenTitle")[0];
const screenHint = runtimeScene.getObjects("ScreenHint")[0];
const visionLight = runtimeScene.getObjects("VisionLight")[0];
const sceneVars = runtimeScene.getVariables();

if (!player) {
  return;
}

const movement = player.getBehavior("TopDownMovement");
const runtimeGame = runtimeScene.getGame();
if (!gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 2)) {
  gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\haunted_bgm.wav", 2, true, 36, 1);
}
const padCache = runtimeGame._hhGamepadState || { buttons: {} };
runtimeGame._hhGamepadState = padCache;
const pads = typeof navigator !== "undefined" && navigator.getGamepads ? navigator.getGamepads() : [];
let activePad = null;
for (let i = 0; i < pads.length; i++) {
  if (pads[i] && pads[i].connected) {
    activePad = pads[i];
    break;
  }
}
const isPadButtonDown = index => !!(activePad && activePad.buttons[index] && activePad.buttons[index].pressed);
const getAxis = index => activePad && typeof activePad.axes[index] === "number" ? activePad.axes[index] : 0;
const readJustPressed = index => {
  const key = `b${index}`;
  const pressed = isPadButtonDown(index);
  const wasPressed = !!padCache.buttons[key];
  padCache.buttons[key] = pressed;
  return pressed && !wasPressed;
};
const padConfirmPressed = readJustPressed(0) || readJustPressed(9);
const padLightPressed = readJustPressed(2);
const padWardPressed = readJustPressed(1);
const dpadX = (isPadButtonDown(15) ? 1 : 0) - (isPadButtonDown(14) ? 1 : 0);
const dpadY = (isPadButtonDown(13) ? 1 : 0) - (isPadButtonDown(12) ? 1 : 0);
const rawStickX = getAxis(0);
const rawStickY = getAxis(1);
const stickDeadzone = 0.28;
let moveX = rawStickX;
let moveY = rawStickY;
if (Math.hypot(moveX, moveY) < stickDeadzone && (dpadX !== 0 || dpadY !== 0)) {
  moveX = dpadX;
  moveY = dpadY;
}
if (screenPanel) {
  const panelRenderer = screenPanel.getRendererObject ? screenPanel.getRendererObject() : null;
  if (panelRenderer) {
    panelRenderer.alpha = 0.76;
    panelRenderer.tint = 0x000000;
  }
}

const enemySpots = [[2752, 1536], [2944, 1536], [2816, 320], [2944, 320], [2240, 1184], [2752, 1184], [1664, 640], [1824, 960], [960, 1408], [1216, 1664]];
const relicSpots = [[2944, 256], [2848, 1664], [1664, 1472], [832, 1184], [2464, 640], [1184, 1664]];
const lightSpots = [[832, 1504], [608, 960], [2560, 256], [2720, 864], [1408, 320]];
const repelSpots = [[2144, 512], [1184, 1280], [2560, 1472], [480, 1664]];
const shuffle = list => list.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(entry => entry.value);
const chosenEnemyStarts = shuffle(enemySpots);
const chosenRelics = shuffle(relicSpots).slice(0, 3);
const chosenLights = shuffle(lightSpots).slice(0, 3);
const chosenRepels = shuffle(repelSpots).slice(0, 2);

if (gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene) || sceneVars.get("NeedReset").getAsBoolean()) {
  sceneVars.get("NeedReset").setBoolean(false);
  sceneVars.get("GameStarted").setBoolean(false);
  sceneVars.get("HasKey").setBoolean(false);
  sceneVars.get("Dead").setBoolean(false);
  sceneVars.get("Escaped").setBoolean(false);
  sceneVars.get("CollectedCount").setNumber(0);
  sceneVars.get("LightCharges").setNumber(1);
  sceneVars.get("RepelCharges").setNumber(0);
  sceneVars.get("BrightTimeLeft").setNumber(0);
  player.setPosition(160, 160);
  movement.ignoreDefaultControls(false);
  const enemies = runtimeScene.getObjects("Enemy").slice().sort((a, b) => a.getUniqueId() - b.getUniqueId());
  enemies.forEach((enemy, index) => {
    const start = chosenEnemyStarts[index] || enemySpots[0];
    enemy.setPosition(start[0], start[1]);
    const behavior = enemy.getBehavior("Pathfinding");
    behavior.setSpeed(0);
    enemy.getVariables().get("PatrolTarget").setNumber(1);
    enemy.getVariables().get("AiState").setString("patrol");
    enemy.getVariables().get("StunTime").setNumber(0);
    enemy.getVariables().get("RepelCooldown").setNumber(0);
    enemy.getVariables().get("KnockbackX").setNumber(0);
    enemy.getVariables().get("KnockbackY").setNumber(0);
  });
  const relicObjects = [runtimeScene.getObjects("Key")[0], runtimeScene.getObjects("Key2")[0], runtimeScene.getObjects("Key3")[0]];
  relicObjects.forEach((object, index) => {
    if (!object) return;
    const position = chosenRelics[index] || chosenRelics[0];
    object.setPosition(position[0], position[1]);
  });
  runtimeScene.getObjects("LightItem").forEach((object, index) => {
    const position = chosenLights[index] || [-500, -500];
    object.setPosition(position[0], position[1]);
  });
  runtimeScene.getObjects("RepelItem").forEach((object, index) => {
    const position = chosenRepels[index] || [-500, -500];
    object.setPosition(position[0], position[1]);
  });
  const closedDoor = runtimeScene.getObjects("ClosedDoor")[0];
  const openDoor = runtimeScene.getObjects("OpenDoor")[0];
  if (closedDoor) closedDoor.setPosition(128, 1696);
  if (openDoor) openDoor.setPosition(-500, -500);
  if (message) message.setString("收集 3 個遺物後開啟出口。鍵盤 F = 照亮、G = 定身；手把 X = 照亮、B = 定身。");
}

const dt = gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
const brightTime = sceneVars.get("BrightTimeLeft");
if (brightTime.getAsNumber() > 0) {
  brightTime.setNumber(Math.max(0, brightTime.getAsNumber() - dt));
}
gdjs.evtTools.camera.setLayerAmbientLightColor(runtimeScene, "Lighting", brightTime.getAsNumber() > 0 ? "120;116;92" : "31;28;28");
if (hudStats) {
  const relics = sceneVars.get("CollectedCount").getAsNumber();
  const flash = sceneVars.get("LightCharges").getAsNumber();
  const ward = sceneVars.get("RepelCharges").getAsNumber();
  const exitState = sceneVars.get("HasKey").getAsBoolean() ? "出口已開" : "出口上鎖";
  hudStats.setString(`遺物 ${relics}/3\n照明 ${flash}\n護符 ${ward}\n${exitState}`);
}
if (screenPanel && screenTitle && screenHint) {
  if (!sceneVars.get("GameStarted").getAsBoolean() && !sceneVars.get("Dead").getAsBoolean() && !sceneVars.get("Escaped").getAsBoolean()) {
    movement.ignoreDefaultControls(true);
    screenPanel.setPosition(200, 70);
    screenTitle.setString("凶宅逃脫");
    screenHint.setString("按 Enter、Space 或手把 A 開始\n收集 3 個遺物後逃離\nF / X = 照亮   G / B = 定身");
    if (gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return") || gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space") || padConfirmPressed) {
      sceneVars.get("GameStarted").setBoolean(true);
      movement.ignoreDefaultControls(false);
    }
  } else if (sceneVars.get("Dead").getAsBoolean()) {
    movement.ignoreDefaultControls(true);
    screenPanel.setPosition(200, 70);
    screenTitle.setString("你被抓到了");
    screenHint.setString("按 R 或手把 A 重試");
    if (gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r") || padConfirmPressed) {
      movement.ignoreDefaultControls(false);
      sceneVars.get("NeedReset").setBoolean(true);
    }
  } else if (sceneVars.get("Escaped").getAsBoolean()) {
    movement.ignoreDefaultControls(true);
    screenPanel.setPosition(200, 70);
    screenTitle.setString("成功逃脫");
    screenHint.setString("按 R 或手把 A 重新開始");
    if (gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r") || padConfirmPressed) {
      movement.ignoreDefaultControls(false);
      sceneVars.get("NeedReset").setBoolean(true);
    }
  } else {
    screenPanel.setPosition(-2200, -2200);
    screenTitle.setString("");
    screenHint.setString("");
  }
}

const gameActive = sceneVars.get("GameStarted").getAsBoolean() && !sceneVars.get("Dead").getAsBoolean() && !sceneVars.get("Escaped").getAsBoolean();
if (gameActive) {
  const stickLength = Math.hypot(moveX, moveY);
  if (stickLength >= stickDeadzone) {
    const stickAngle = Math.atan2(moveY, moveX) * 180 / Math.PI;
    const stickForce = Math.min(1, (stickLength - stickDeadzone) / (1 - stickDeadzone));
    movement.simulateStick(stickAngle, stickForce);
  }
  if ((gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "f") || padLightPressed) && sceneVars.get("LightCharges").getAsNumber() > 0) {
    sceneVars.get("LightCharges").setNumber(sceneVars.get("LightCharges").getAsNumber() - 1);
    brightTime.setNumber(6);
    if (message) message.setString("地圖暫時亮了起來。");
  }
  if ((gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "g") || padWardPressed) && sceneVars.get("RepelCharges").getAsNumber() > 0) {
    sceneVars.get("RepelCharges").setNumber(sceneVars.get("RepelCharges").getAsNumber() - 1);
    const enemies = runtimeScene.getObjects("Enemy");
    enemies.forEach(enemy => {
      const px = player.getCenterXInScene();
      const py = player.getCenterYInScene();
      const ex = enemy.getCenterXInScene();
      const ey = enemy.getCenterYInScene();
      const distance = Math.hypot(ex - px, ey - py);
      if (distance <= 260) {
        enemy.getVariables().get("KnockbackX").setNumber(0);
        enemy.getVariables().get("KnockbackY").setNumber(0);
        enemy.getVariables().get("AiState").setString("patrol");
        enemy.getVariables().get("StunTime").setNumber(2.4);
        enemy.getVariables().get("RepelCooldown").setNumber(0);
        enemy.getBehavior("Pathfinding").setSpeed(0);
      }
    });
    if (message) message.setString("附近的鬼被定住了。");
  }
}
const anyFrozen = runtimeScene.getObjects("Enemy").some(enemy => enemy.getVariables().get("StunTime").getAsNumber() > 2.3);
if (anyFrozen && message) {
  message.setString("附近的鬼被定住了。");
} else if (brightTime.getAsNumber() > 5.9 && message) {
  message.setString("地圖暫時亮了起來。");
} else if (!sceneVars.get("Dead").getAsBoolean() && !sceneVars.get("Escaped").getAsBoolean() && sceneVars.get("CollectedCount").getAsNumber() === 0 && sceneVars.get("LightCharges").getAsNumber() === 0 && sceneVars.get("RepelCharges").getAsNumber() === 0 && !sceneVars.get("HasKey").getAsBoolean() && message) {
  message.setString("收集 3 個遺物後開啟出口。");
}

if (visionLight) {
  visionLight.setPosition(player.getPointX("Centre"), player.getPointY("Centre"));
}
gdjs.evtTools.camera.centerCamera(runtimeScene, player, false, "", 0);
gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 3200, 1920, "", 0);
};
gdjs.MansionEscapeCode.userFunc0x982708 = function GDJSInlineCode(runtimeScene) {
"use strict";
const player = runtimeScene.getObjects("Player")[0];

if (!player) {
  return;
}

const movement = player.getBehavior("TopDownMovement");
const facingVariable = player.getVariables().get("Facing");
let facing = facingVariable.getAsString() || "1";
const vx = movement.getXVelocity();
const vy = movement.getYVelocity();

if (Math.abs(vx) > Math.abs(vy) && Math.abs(vx) > 1) {
  facing = vx > 0 ? "0" : "2";
} else if (Math.abs(vy) > 1) {
  facing = vy > 0 ? "1" : "3";
}

facingVariable.setString(facing);

const targetAnimation = (movement.isMoving() ? "Walk" : "Idle") + facing;
if (player.getAnimationName() !== targetAnimation) {
  player.setAnimationName(targetAnimation);
}
};
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDKeyObjects1Objects = Hashtable.newFrom({"Key": gdjs.MansionEscapeCode.GDKeyObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDKey2Objects1Objects = Hashtable.newFrom({"Key2": gdjs.MansionEscapeCode.GDKey2Objects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDKey3Objects1Objects = Hashtable.newFrom({"Key3": gdjs.MansionEscapeCode.GDKey3Objects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDLightItemObjects1Objects = Hashtable.newFrom({"LightItem": gdjs.MansionEscapeCode.GDLightItemObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDRepelItemObjects1Objects = Hashtable.newFrom({"RepelItem": gdjs.MansionEscapeCode.GDRepelItemObjects1});
gdjs.MansionEscapeCode.userFunc0xa0b460 = function GDJSInlineCode(runtimeScene) {
"use strict";
const player = runtimeScene.getObjects("Player")[0];
if (!player) {
  return;
}
const sceneVars = runtimeScene.getVariables();
const enemies = runtimeScene.getObjects("Enemy").slice().sort((a, b) => a.getUniqueId() - b.getUniqueId());
const routes = [
  [[2752, 1536], [2944, 1536]],
  [[2752, 320], [2944, 320]],
  [[2240, 1184], [2752, 1184]],
  [[1600, 512], [1824, 960]],
  [[768, 1408], [1216, 1664]],
];
const dt = gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);

if (!sceneVars.get("GameStarted").getAsBoolean() || sceneVars.get("Dead").getAsBoolean() || sceneVars.get("Escaped").getAsBoolean()) {
  enemies.forEach(enemy => enemy.getBehavior("Pathfinding").setSpeed(0));
  return;
}

enemies.forEach((enemy, index) => {
  const behavior = enemy.getBehavior("Pathfinding");
  const stunVar = enemy.getVariables().get("StunTime");
  const stateVar = enemy.getVariables().get("AiState");
  const patrolVar = enemy.getVariables().get("PatrolTarget");
  const repelCooldownVar = enemy.getVariables().get("RepelCooldown");
  let stunTime = stunVar.getAsNumber();
  const knockbackXVar = enemy.getVariables().get("KnockbackX");
  const knockbackYVar = enemy.getVariables().get("KnockbackY");
  if (stunTime > 0) {
    stunTime = Math.max(0, stunTime - dt);
    stunVar.setNumber(stunTime);
    behavior.setSpeed(0);
    const nextX = Math.max(0, Math.min(3200 - enemy.getWidth(), enemy.getX() + knockbackXVar.getAsNumber() * dt));
    const nextY = Math.max(0, Math.min(1920 - enemy.getHeight(), enemy.getY() + knockbackYVar.getAsNumber() * dt));
    enemy.setPosition(nextX, nextY);
    knockbackXVar.setNumber(knockbackXVar.getAsNumber() * 0.82);
    knockbackYVar.setNumber(knockbackYVar.getAsNumber() * 0.82);
    if (stunTime === 0) {
      knockbackXVar.setNumber(0);
      knockbackYVar.setNumber(0);
    }
    return;
  }

  let repelCooldown = repelCooldownVar.getAsNumber();
  if (repelCooldown > 0) {
    repelCooldown = Math.max(0, repelCooldown - dt);
    repelCooldownVar.setNumber(repelCooldown);
    behavior.setSpeed(0);
    stateVar.setString("patrol");
    return;
  }

  const distance = enemy.getDistanceToObject(player);
  let state = stateVar.getAsString() || "patrol";
  if (distance <= 170) {
    state = "chase";
  } else if (distance >= 250) {
    state = "patrol";
  }
  stateVar.setString(state);

  if (state === "chase") {
    behavior.setSpeed(195);
    behavior.moveTo(runtimeScene, player.getX(), player.getY());
    return;
  }

  const route = routes[index % routes.length];
  let patrolTarget = patrolVar.getAsNumber();
  if (patrolTarget !== 0 && patrolTarget !== 1) patrolTarget = 1;
  let target = route[patrolTarget];
  if (enemy.getDistanceToPosition(target[0], target[1]) < 24) {
    patrolTarget = patrolTarget === 0 ? 1 : 0;
    patrolVar.setNumber(patrolTarget);
    target = route[patrolTarget];
  }
  behavior.setSpeed(58);
  behavior.moveTo(runtimeScene, target[0], target[1]);
});
};
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MansionEscapeCode.GDEnemyObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MansionEscapeCode.GDPlayerObjects1});
gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDOpenDoorObjects1Objects = Hashtable.newFrom({"OpenDoor": gdjs.MansionEscapeCode.GDOpenDoorObjects1});
gdjs.MansionEscapeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gametime");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ClosedDoor"), gdjs.MansionEscapeCode.GDClosedDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MansionEscapeCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.MansionEscapeCode.GDKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Key2"), gdjs.MansionEscapeCode.GDKey2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Key3"), gdjs.MansionEscapeCode.GDKey3Objects1);
gdjs.copyArray(runtimeScene.getObjects("OpenDoor"), gdjs.MansionEscapeCode.GDOpenDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("VisionLight"), gdjs.MansionEscapeCode.GDVisionLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MansionEscapeCode.GDWallObjects1);
{for(var i = 0, len = gdjs.MansionEscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDPlayerObjects1[i].setZOrder((gdjs.MansionEscapeCode.GDPlayerObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDEnemyObjects1[i].setZOrder((gdjs.MansionEscapeCode.GDEnemyObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDKeyObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDKeyObjects1[i].setZOrder((gdjs.MansionEscapeCode.GDKeyObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDKey2Objects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDKey2Objects1[i].setZOrder((gdjs.MansionEscapeCode.GDKey2Objects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDKey3Objects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDKey3Objects1[i].setZOrder((gdjs.MansionEscapeCode.GDKey3Objects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDClosedDoorObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDClosedDoorObjects1[i].setZOrder((gdjs.MansionEscapeCode.GDClosedDoorObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDOpenDoorObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDOpenDoorObjects1[i].setZOrder((gdjs.MansionEscapeCode.GDOpenDoorObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDVisionLightObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDVisionLightObjects1[i].setPosition((( gdjs.MansionEscapeCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MansionEscapeCode.GDPlayerObjects1[0].getPointX("Centre")),(( gdjs.MansionEscapeCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MansionEscapeCode.GDPlayerObjects1[0].getPointY("Centre")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDWallObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDClosedDoorObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDEnemyObjects1[i].separateFromObjectsList(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDWallObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDEnemyObjects1[i].separateFromObjectsList(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDEnemyObjects1Objects, false);
}
}
}

}


{


gdjs.MansionEscapeCode.userFunc0x982678(runtimeScene);

}


{


gdjs.MansionEscapeCode.userFunc0x982708(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.MansionEscapeCode.GDKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
if (isConditionTrue_0) {
if (isConditionTrue_0) {
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MansionEscapeCode.GDKeyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDKeyObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDKeyObjects1[i].setPosition(-(500),-(500));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("黑暗中有遺物在共鳴，繼續找下去。");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Key2"), gdjs.MansionEscapeCode.GDKey2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDKey2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MansionEscapeCode.GDKey2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDKey2Objects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDKey2Objects1[i].setPosition(-(500),-(500));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("黑暗中有遺物在共鳴，繼續找下去。");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Key3"), gdjs.MansionEscapeCode.GDKey3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDKey3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MansionEscapeCode.GDKey3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDKey3Objects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDKey3Objects1[i].setPosition(-(500),-(500));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("黑暗中有遺物在共鳴，繼續找下去。");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClosedDoor"), gdjs.MansionEscapeCode.GDClosedDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpenDoor"), gdjs.MansionEscapeCode.GDOpenDoorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDOpenDoorObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDOpenDoorObjects1[i].setPosition((( gdjs.MansionEscapeCode.GDClosedDoorObjects1.length === 0 ) ? 0 :gdjs.MansionEscapeCode.GDClosedDoorObjects1[0].getPointX("")),(( gdjs.MansionEscapeCode.GDClosedDoorObjects1.length === 0 ) ? 0 :gdjs.MansionEscapeCode.GDClosedDoorObjects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDClosedDoorObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDClosedDoorObjects1[i].setPosition(-(500),-(500));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("3 個遺物都收集完成了，快往出口逃。");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LightItem"), gdjs.MansionEscapeCode.GDLightItemObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDLightItemObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MansionEscapeCode.GDLightItemObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDLightItemObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDLightItemObjects1[i].setPosition(-(500),-(500));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("你撿到照明遺物了，按 F 可暫時照亮地圖。");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RepelItem"), gdjs.MansionEscapeCode.GDRepelItemObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDRepelItemObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
/* Reuse gdjs.MansionEscapeCode.GDRepelItemObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDRepelItemObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDRepelItemObjects1[i].setPosition(-(500),-(500));
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("你撿到驅鬼護符了，按 G 可震退附近鬼魂。");
}
}
}

}


{


gdjs.MansionEscapeCode.userFunc0xa0b460(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MansionEscapeCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
/* Reuse gdjs.MansionEscapeCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("plain_text"), gdjs.MansionEscapeCode.GDplain_9595textObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("你被抓到了，按 R 重新挑戰。");
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "gametime");
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDplain_9595textObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDplain_9595textObjects1[i].getBehavior("Text").setText("結束時間：" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "gametime")) + " 秒");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenDoor"), gdjs.MansionEscapeCode.GDOpenDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDPlayerObjects1Objects, gdjs.MansionEscapeCode.mapOfGDgdjs_9546MansionEscapeCode_9546GDOpenDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.MansionEscapeCode.GDMessageObjects1);
/* Reuse gdjs.MansionEscapeCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("plain_text"), gdjs.MansionEscapeCode.GDplain_9595textObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{gdjs.evtTools.network.sendAsyncRequest("https://s1411322039escape.onrender.com/hiscore?name=Player&clearTime=" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "gametime")), "", "GET", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "gametime");
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDMessageObjects1[i].setString("你成功逃出去了，" + " 按 R 重新開始。");
}
}
{for(var i = 0, len = gdjs.MansionEscapeCode.GDplain_9595textObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDplain_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "gametime")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MansionEscapeCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MansionEscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MansionEscapeCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://s1411322039escape.onrender.com/rank", runtimeScene);
}
}

}


};

gdjs.MansionEscapeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MansionEscapeCode.GDFloorObjects1.length = 0;
gdjs.MansionEscapeCode.GDFloorObjects2.length = 0;
gdjs.MansionEscapeCode.GDWallObjects1.length = 0;
gdjs.MansionEscapeCode.GDWallObjects2.length = 0;
gdjs.MansionEscapeCode.GDMessageObjects1.length = 0;
gdjs.MansionEscapeCode.GDMessageObjects2.length = 0;
gdjs.MansionEscapeCode.GDHudStatsObjects1.length = 0;
gdjs.MansionEscapeCode.GDHudStatsObjects2.length = 0;
gdjs.MansionEscapeCode.GDScreenPanelObjects1.length = 0;
gdjs.MansionEscapeCode.GDScreenPanelObjects2.length = 0;
gdjs.MansionEscapeCode.GDScreenTitleObjects1.length = 0;
gdjs.MansionEscapeCode.GDScreenTitleObjects2.length = 0;
gdjs.MansionEscapeCode.GDScreenHintObjects1.length = 0;
gdjs.MansionEscapeCode.GDScreenHintObjects2.length = 0;
gdjs.MansionEscapeCode.GDPlayerObjects1.length = 0;
gdjs.MansionEscapeCode.GDPlayerObjects2.length = 0;
gdjs.MansionEscapeCode.GDEnemyObjects1.length = 0;
gdjs.MansionEscapeCode.GDEnemyObjects2.length = 0;
gdjs.MansionEscapeCode.GDKeyObjects1.length = 0;
gdjs.MansionEscapeCode.GDKeyObjects2.length = 0;
gdjs.MansionEscapeCode.GDClosedDoorObjects1.length = 0;
gdjs.MansionEscapeCode.GDClosedDoorObjects2.length = 0;
gdjs.MansionEscapeCode.GDOpenDoorObjects1.length = 0;
gdjs.MansionEscapeCode.GDOpenDoorObjects2.length = 0;
gdjs.MansionEscapeCode.GDVisionLightObjects1.length = 0;
gdjs.MansionEscapeCode.GDVisionLightObjects2.length = 0;
gdjs.MansionEscapeCode.GDKey2Objects1.length = 0;
gdjs.MansionEscapeCode.GDKey2Objects2.length = 0;
gdjs.MansionEscapeCode.GDKey3Objects1.length = 0;
gdjs.MansionEscapeCode.GDKey3Objects2.length = 0;
gdjs.MansionEscapeCode.GDLightItemObjects1.length = 0;
gdjs.MansionEscapeCode.GDLightItemObjects2.length = 0;
gdjs.MansionEscapeCode.GDRepelItemObjects1.length = 0;
gdjs.MansionEscapeCode.GDRepelItemObjects2.length = 0;
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.MansionEscapeCode.GDplain_9595textObjects1.length = 0;
gdjs.MansionEscapeCode.GDplain_9595textObjects2.length = 0;

gdjs.MansionEscapeCode.eventsList0(runtimeScene);
gdjs.MansionEscapeCode.GDFloorObjects1.length = 0;
gdjs.MansionEscapeCode.GDFloorObjects2.length = 0;
gdjs.MansionEscapeCode.GDWallObjects1.length = 0;
gdjs.MansionEscapeCode.GDWallObjects2.length = 0;
gdjs.MansionEscapeCode.GDMessageObjects1.length = 0;
gdjs.MansionEscapeCode.GDMessageObjects2.length = 0;
gdjs.MansionEscapeCode.GDHudStatsObjects1.length = 0;
gdjs.MansionEscapeCode.GDHudStatsObjects2.length = 0;
gdjs.MansionEscapeCode.GDScreenPanelObjects1.length = 0;
gdjs.MansionEscapeCode.GDScreenPanelObjects2.length = 0;
gdjs.MansionEscapeCode.GDScreenTitleObjects1.length = 0;
gdjs.MansionEscapeCode.GDScreenTitleObjects2.length = 0;
gdjs.MansionEscapeCode.GDScreenHintObjects1.length = 0;
gdjs.MansionEscapeCode.GDScreenHintObjects2.length = 0;
gdjs.MansionEscapeCode.GDPlayerObjects1.length = 0;
gdjs.MansionEscapeCode.GDPlayerObjects2.length = 0;
gdjs.MansionEscapeCode.GDEnemyObjects1.length = 0;
gdjs.MansionEscapeCode.GDEnemyObjects2.length = 0;
gdjs.MansionEscapeCode.GDKeyObjects1.length = 0;
gdjs.MansionEscapeCode.GDKeyObjects2.length = 0;
gdjs.MansionEscapeCode.GDClosedDoorObjects1.length = 0;
gdjs.MansionEscapeCode.GDClosedDoorObjects2.length = 0;
gdjs.MansionEscapeCode.GDOpenDoorObjects1.length = 0;
gdjs.MansionEscapeCode.GDOpenDoorObjects2.length = 0;
gdjs.MansionEscapeCode.GDVisionLightObjects1.length = 0;
gdjs.MansionEscapeCode.GDVisionLightObjects2.length = 0;
gdjs.MansionEscapeCode.GDKey2Objects1.length = 0;
gdjs.MansionEscapeCode.GDKey2Objects2.length = 0;
gdjs.MansionEscapeCode.GDKey3Objects1.length = 0;
gdjs.MansionEscapeCode.GDKey3Objects2.length = 0;
gdjs.MansionEscapeCode.GDLightItemObjects1.length = 0;
gdjs.MansionEscapeCode.GDLightItemObjects2.length = 0;
gdjs.MansionEscapeCode.GDRepelItemObjects1.length = 0;
gdjs.MansionEscapeCode.GDRepelItemObjects2.length = 0;
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.MansionEscapeCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.MansionEscapeCode.GDplain_9595textObjects1.length = 0;
gdjs.MansionEscapeCode.GDplain_9595textObjects2.length = 0;


return;

}

gdjs['MansionEscapeCode'] = gdjs.MansionEscapeCode;
