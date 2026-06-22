
gdjs.evtsExt__PanelSpriteButton__TextStyleState = gdjs.evtsExt__PanelSpriteButton__TextStyleState || {};

/**
 * Behavior generated from Hover text style
 */
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState = class TextStyleState extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ShouldEnableOutlineOnHover = behaviorData.ShouldEnableOutlineOnHover !== undefined ? behaviorData.ShouldEnableOutlineOnHover : false;
    this._behaviorData.HoverColor = behaviorData.HoverColor !== undefined ? behaviorData.HoverColor : "";
    this._behaviorData.ShouldEnableShadowOnHover = behaviorData.ShouldEnableShadowOnHover !== undefined ? behaviorData.ShouldEnableShadowOnHover : false;
    this._behaviorData.HoverFontSize = behaviorData.HoverFontSize !== undefined ? behaviorData.HoverFontSize : Number("0") || 0;
    this._behaviorData.IsHovered = false;
    this._behaviorData.IdleFontSize = Number("0") || 0;
    this._behaviorData.IdleColor = "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ShouldEnableOutlineOnHover !== newBehaviorData.ShouldEnableOutlineOnHover)
      this._behaviorData.ShouldEnableOutlineOnHover = newBehaviorData.ShouldEnableOutlineOnHover;
    if (oldBehaviorData.HoverColor !== newBehaviorData.HoverColor)
      this._behaviorData.HoverColor = newBehaviorData.HoverColor;
    if (oldBehaviorData.ShouldEnableShadowOnHover !== newBehaviorData.ShouldEnableShadowOnHover)
      this._behaviorData.ShouldEnableShadowOnHover = newBehaviorData.ShouldEnableShadowOnHover;
    if (oldBehaviorData.HoverFontSize !== newBehaviorData.HoverFontSize)
      this._behaviorData.HoverFontSize = newBehaviorData.HoverFontSize;
    if (oldBehaviorData.IsHovered !== newBehaviorData.IsHovered)
      this._behaviorData.IsHovered = newBehaviorData.IsHovered;
    if (oldBehaviorData.IdleFontSize !== newBehaviorData.IdleFontSize)
      this._behaviorData.IdleFontSize = newBehaviorData.IdleFontSize;
    if (oldBehaviorData.IdleColor !== newBehaviorData.IdleColor)
      this._behaviorData.IdleColor = newBehaviorData.IdleColor;

    return true;
  }

  // Properties:
  
  _getShouldEnableOutlineOnHover() {
    return this._behaviorData.ShouldEnableOutlineOnHover !== undefined ? this._behaviorData.ShouldEnableOutlineOnHover : false;
  }
  _setShouldEnableOutlineOnHover(newValue) {
    this._behaviorData.ShouldEnableOutlineOnHover = newValue;
  }
  _toggleShouldEnableOutlineOnHover() {
    this._setShouldEnableOutlineOnHover(!this._getShouldEnableOutlineOnHover());
  }
  _getHoverColor() {
    return this._behaviorData.HoverColor !== undefined ? this._behaviorData.HoverColor : "";
  }
  _setHoverColor(newValue) {
    this._behaviorData.HoverColor = newValue;
  }
  _getShouldEnableShadowOnHover() {
    return this._behaviorData.ShouldEnableShadowOnHover !== undefined ? this._behaviorData.ShouldEnableShadowOnHover : false;
  }
  _setShouldEnableShadowOnHover(newValue) {
    this._behaviorData.ShouldEnableShadowOnHover = newValue;
  }
  _toggleShouldEnableShadowOnHover() {
    this._setShouldEnableShadowOnHover(!this._getShouldEnableShadowOnHover());
  }
  _getHoverFontSize() {
    return this._behaviorData.HoverFontSize !== undefined ? this._behaviorData.HoverFontSize : Number("0") || 0;
  }
  _setHoverFontSize(newValue) {
    this._behaviorData.HoverFontSize = newValue;
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
  _getIdleFontSize() {
    return this._behaviorData.IdleFontSize !== undefined ? this._behaviorData.IdleFontSize : Number("0") || 0;
  }
  _setIdleFontSize(newValue) {
    this._behaviorData.IdleFontSize = newValue;
  }
  _getIdleColor() {
    return this._behaviorData.IdleColor !== undefined ? this._behaviorData.IdleColor : "";
  }
  _setIdleColor(newValue) {
    this._behaviorData.IdleColor = newValue;
  }
}

/**
 * Shared data generated from Hover text style
 */
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.SharedData = class TextStyleStateSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PanelSpriteButton_TextStyleStateSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PanelSpriteButton_TextStyleStateSharedData = new gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.SharedData(
      initialData
    );
  }
  return instanceContainer._PanelSpriteButton_TextStyleStateSharedData;
}

// Methods:
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHovered = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects3= [];


gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{/* Unknown instruction - skipped. */}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].setCharacterSize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHoverFontSize());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{/* Unknown instruction - skipped. */}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].setColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHoverColor());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].showShadow(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1[i].setOutlineEnabled(true);
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].setCharacterSize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleFontSize());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].setColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleColor());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2[i].showShadow(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1[i].setOutlineEnabled(false);
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
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
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHovered = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.SetIsHoveredContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext = {};
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext.GDObjectObjects1= [];


gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext.userFunc0x78dad8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.TextRuntimeObject} */
const object = eventsFunctionContext.getObjects("Object")[0];

eventsFunctionContext.returnValue = object._color.join(";");
};
gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext.userFunc0x78dad8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.Color = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.ColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PanelSpriteButton::TextStyleState", gdjs.evtsExt__PanelSpriteButton__TextStyleState.TextStyleState);
