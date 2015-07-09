// Type definitions for Cannon Debug Renderer
// Project: https://github.com/schteppe/cannon.js/tree/master/tools/threejs
// Definitions by: Robert Krasky https://github.com/rkrasky/typescript
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

/// <reference path="three.d.ts" />
/// <reference path="cannon.d.ts" />

declare module THREE
{
    class CannonDebugRenderer
    {
        constructor(scene:THREE.Scene, world:CANNON.World);

        update():void;
    }
}