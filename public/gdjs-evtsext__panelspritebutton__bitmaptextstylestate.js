
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState = gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState || {};

/**
 * Behavior generated from Hover bitmap text style
 */
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState = class BitmapTextStyleState extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HoverColor = behaviorData.HoverColor !== undefined ? behaviorData.HoverColor : "";
    this._behaviorData.HoverPrefix = behaviorData.HoverPrefix !== undefined ? behaviorData.HoverPrefix : "";
    this._behaviorData.HoverSuffix = behaviorData.HoverSuffix !== undefined ? behaviorData.HoverSuffix : "";
    this._behaviorData.IsHovered = false;
    this._behaviorData.IdleText = "";
    this._behaviorData.IdleColor = "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HoverColor !== newBehaviorData.HoverColor)
      this._behaviorData.HoverColor = newBehaviorData.HoverColor;
    if (oldBehaviorData.HoverPrefix !== newBehaviorData.HoverPrefix)
      this._behaviorData.HoverPrefix = newBehaviorData.HoverPrefix;
    if (oldBehaviorData.HoverSuffix !== newBehaviorData.HoverSuffix)
      this._behaviorData.HoverSuffix = newBehaviorData.HoverSuffix;
    if (oldBehaviorData.IsHovered !== newBehaviorData.IsHovered)
      this._behaviorData.IsHovered = newBehaviorData.IsHovered;
    if (oldBehaviorData.IdleText !== newBehaviorData.IdleText)
      this._behaviorData.IdleText = newBehaviorData.IdleText;
    if (oldBehaviorData.IdleColor !== newBehaviorData.IdleColor)
      this._behaviorData.IdleColor = newBehaviorData.IdleColor;

    return true;
  }

  // Properties:
  
  _getHoverColor() {
    return this._behaviorData.HoverColor !== undefined ? this._behaviorData.HoverColor : "";
  }
  _setHoverColor(newValue) {
    this._behaviorData.HoverColor = newValue;
  }
  _getHoverPrefix() {
    return this._behaviorData.HoverPrefix !== undefined ? this._behaviorData.HoverPrefix : "";
  }
  _setHoverPrefix(newValue) {
    this._behaviorData.HoverPrefix = newValue;
  }
  _getHoverSuffix() {
    return this._behaviorData.HoverSuffix !== undefined ? this._behaviorData.HoverSuffix : "";
  }
  _setHoverSuffix(newValue) {
    this._behaviorData.HoverSuffix = newValue;
  }
  _getIsHovered() {
    return this._behaviorData.IsHovered !== undefined ? this._behaviorData.IsHovered : false;
  }
  _setIsHovered(newValue) {
    this._behaviorData.IsHovered = newValue;
  }
  _toggleIsHovered() {
    this._setIsHovered(!this._getIsHovered());
  }
  _getIdleText() {
    return this._behaviorData.IdleText !== undefined ? this._behaviorData.IdleText : "";
  }
  _setIdleText(newValue) {
    this._behaviorData.IdleText = newValue;
  }
  _getIdleColor() {
    return this._behaviorData.IdleColor !== undefined ? this._behaviorData.IdleColor : "";
  }
  _setIdleColor(newValue) {
    this._behaviorData.IdleColor = newValue;
  }
}

/**
 * Shared data generated from Hover bitmap text style
 */
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.SharedData = class BitmapTextStyleStateSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PanelSpriteButton_BitmapTextStyleStateSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PanelSpriteButton_BitmapTextStyleStateSharedData = new gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.SharedData(
      initialData
    );
  }
  return instanceContainer._PanelSpriteButton_BitmapTextStyleStateSharedData;
}

// Methods:
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHovered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects3= [];


gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{/* Unknown instruction - skipped. */}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].setTint(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHoverColor());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
/* Unknown instruction - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
/* Unknown instruction - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1);
{/* Unknown instruction - skipped. */}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHoverPrefix() + (gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHoverSuffix());
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].setTint(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleColor());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
/* Unknown instruction - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
/* Unknown instruction - skipped. */if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleText());
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHovered = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.SetIsHoveredContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext = {};
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext.GDObjectObjects1= [];


gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext.userFunc0x88b3c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.BitmapTextRuntimeObject} */
const object = eventsFunctionContext.getObjects("Object")[0];

eventsFunctionContext.returnValue = object._tint.join(";");
};
gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext.userFunc0x88b3c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.Color = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.ColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PanelSpriteButton::BitmapTextStyleState", gdjs.evtsExt__PanelSpriteButton__BitmapTextStyleState.BitmapTextStyleState);
