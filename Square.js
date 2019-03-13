(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Square_atlas_", frames: [[0,0,446,446]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Square_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Square_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Square_Layer_1, null, null);


(lib.Square_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Square_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(111,111,1,1,0,0,0,111,111);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Square_1, new cjs.Rectangle(-0.5,-0.5,223,223), null);


(lib.SquareAnim_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Square_1();
	this.instance.parent = this;
	this.instance.setTransform(111,111,1,1,0,0,0,111,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.2465,x:110.95,y:111.05},0).wait(1).to({rotation:0.9845,x:111},0).wait(1).to({rotation:2.2089,x:110.95},0).wait(1).to({rotation:3.911,x:111,y:111},0).wait(1).to({rotation:6.0777,y:111.05},0).wait(1).to({rotation:8.6911,x:110.95,y:111},0).wait(1).to({rotation:11.7283,x:111,y:111.05},0).wait(1).to({rotation:15.1605,x:110.95},0).wait(1).to({rotation:18.9538,x:111},0).wait(1).to({rotation:23.0681,x:110.9,y:111},0).wait(1).to({rotation:27.458,x:110.95,y:111.05},0).wait(1).to({rotation:32.0731,x:110.9},0).wait(1).to({rotation:36.8581},0).wait(1).to({rotation:41.7543,x:110.95,y:111},0).wait(1).to({rotation:46.7001,x:110.9,y:111.05},0).wait(1).to({rotation:51.6323},0).wait(1).to({rotation:56.4878},0).wait(1).to({rotation:61.2042,y:111},0).wait(1).to({rotation:65.7215,y:111.05},0).wait(1).to({rotation:69.9831},0).wait(1).to({rotation:73.9365,y:111},0).wait(1).to({rotation:77.5346,x:110.85,y:111.05},0).wait(1).to({rotation:80.7356,y:111},0).wait(1).to({rotation:83.5038,y:111.05},0).wait(1).to({rotation:85.8092,y:111},0).wait(1).to({rotation:87.6276,x:110.9,y:111.05},0).wait(1).to({rotation:88.9404,x:110.85},0).wait(1).to({rotation:89.7342,y:111},0).wait(1).to({rotation:90,x:110.9},0).wait(1).to({rotation:89.7696,y:111.05},0).wait(1).to({rotation:89.0799},0).wait(1).to({rotation:87.9352,x:110.85},0).wait(1).to({rotation:86.3431,x:110.9,y:111},0).wait(1).to({rotation:84.315,y:111.05},0).wait(1).to({rotation:81.8663,x:110.85},0).wait(1).to({rotation:79.0169,x:110.9,y:111},0).wait(1).to({rotation:75.7916,y:111.05},0).wait(1).to({rotation:72.2199},0).wait(1).to({rotation:68.3363,x:110.95},0).wait(1).to({rotation:64.1805},0).wait(1).to({rotation:59.7965,x:110.9},0).wait(1).to({rotation:55.2325},0).wait(1).to({rotation:50.5405},0).wait(1).to({rotation:45.7751},0).wait(1).to({rotation:40.9927,x:110.95},0).wait(1).to({rotation:36.2505,x:110.9},0).wait(1).to({rotation:31.6055,x:111},0).wait(1).to({rotation:27.1132,x:110.95},0).wait(1).to({rotation:22.8269,y:111},0).wait(1).to({rotation:18.7963,x:111,y:111.05},0).wait(1).to({rotation:15.0675},0).wait(1).to({rotation:11.6816,y:111},0).wait(1).to({rotation:8.6751,y:111.05},0).wait(1).to({rotation:6.0791},0).wait(1).to({rotation:3.9198,x:110.95},0).wait(1).to({rotation:2.2181,y:111},0).wait(1).to({rotation:0.9904,x:111},0).wait(1).to({rotation:0.2484,x:110.95,y:111.05},0).wait(1).to({rotation:0,x:111,y:111},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.SquareAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.SquareAnim_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(111,111,1,1,0,0,0,111,111);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:110.9,x:110.9},0).wait(28).to({regX:111,x:111},0).wait(1).to({regX:110.9,x:110.9},0).wait(29).to({regX:111,x:111},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-46.3,314.79999999999995,314.8);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SquareAnim();
	this.instance.parent = this;
	this.instance.setTransform(232,272.1,1,1,0,0,0,111,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


// stage content:
(lib.Square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(232,272.1,1,1,0,0,0,232,272.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(632.5,544.6,-289,-161);
// library properties:
lib.properties = {
	id: 'BF4BB7DC288E43D8884A8DE95DF73E7D',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Square_atlas_.png?1552502722108", id:"Square_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BF4BB7DC288E43D8884A8DE95DF73E7D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;