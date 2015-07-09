// Type definitions for ShaderParticleEngine 0.7.9
// Project: https://github.com/squarefeet/ShaderParticleEngine
// Definitions by: Robert Krasky https://github.com/rkrasky/typescript

/// <reference path="three.d.ts"/>

declare module SPE {
    export interface GroupSettings
    {
        fixedTimeStep?:number; // default: 0.016
        maxAge?:number; // default: 3
        texture?:THREE.Texture; // default: null
        hasPerspective?:number; // default: 1
        colorize?:number; // default: 1
        blending?:THREE.Blending; // default: THREE.AdditiveBlending
        transparent?:boolean; // default: true
        alphaTest?:number; // default: 0.5
        depthWrite?:boolean; // default: false
        depthTest?:boolean; // default: true
    }

    export interface EmitterSettings
    {
        particleCount?:number; // default: 100
        type?:string; // default: cube, (cube, sphere, disk)

        position?:THREE.Vector3;
        positionSpread?:THREE.Vector3;

        radius?:number; // default: 10
        radiusSpread?:number; // default: 0
        radiusScale?:THREE.Vector3; // default: 1,1,1
        radiusSpreadClamp?:number; // default: 0

        acceleration?:THREE.Vector3; // default: 0,0,0
        accelerationSpread?:THREE.Vector3; // default: 0,0,0

        velocity?:THREE.Vector3; // default: 0,0,0
        velocitySpread?:THREE.Vector3; // default: 0,0,0

        speed?:number; // default: 0, only used when type is sphere or disk
        speedSpread?:number; // default: 0, only used when type is sphere or disk

        sizeStart?:number; // default: 1
        sizeStartSpread?:number; // default: 0

        sizeEnd?:number; // default: sizeStart
        sizeEndSpread?:number; // default: 0

        sizeMiddle?:number; // default: 0.5
        sizeMiddleSpread?:number; // default: 0

        angleStart?:number; // default: 0
        angleStartSpread?:number; // default: 0

        angleEnd?:number; // default: 0
        angleEndSpread?:number; // default: 0

        angleMiddle?:number; // default: 0
        angleMiddleSpread?:number; // default: 0

        angleAlignVelocity?:boolean; // default: false

        colorStart?:THREE.Color; // default: white
        colorStartSpread?:THREE.Vector3; // default: 0,0,0

        colorEnd?:THREE.Color; // default: colorStart
        colorEndSpread?:THREE.Vector3; // default: 0,0,0

        colorMiddle?:THREE.Color; // default: the middle of colorStart and colorEnd
        colorMiddleSpread?:THREE.Vector3; // default: 0,0,0

        opacityStart?:number; // default: 1
        opacityStartSpread?:THREE.Vector3; // default: 0

        opacityEnd?:number; // default: 0
        opacityEndSpread?:THREE.Vector3; // default: 0

        opacityMiddle?:number; // default: 0.5
        opacityMiddleSpread?:THREE.Vector3; // default: 0

        duration?:number; // default: null (endless)
        alive?:number; // default: 1
        isStatic?:number; // default: 0
        onParticleSpawn?:()=>void; // default: null
    }

    class Group {
        mesh:THREE.Mesh;

        constructor(options:GroupSettings);
        addEmitter(particleEmitter:Emitter):Group;
        removeEmitter(emitter);
        getFromPool():Emitter;
        releaseIntoPool(emitter:Emitter):Group;
        addPool(numEmitters:number, emitterSettings:EmitterSettings, createNew:boolean):Group;
        triggerPoolEmitter(numEmitters:number, position:THREE.Vector3):Group;
        tick(dt:number);
    }

    class Emitter {
        position:THREE.Vector3;

        constructor(options:EmitterSettings);
        reset(force:boolean);
        enable();
        disable();
    }
}