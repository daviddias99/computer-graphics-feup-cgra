/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.map = new MyCubeMap(this,'images/xp.png');
        this.terrain = new MyQuad(this,null,'images/grass.jpg');
        this.hill = new MyVoxelHill(this, 8);
        this.prism = new MyPrism(this, 5, 5);
        this.cyl = new MyCylinder(this, 10, 5);
        this.house = new MyHouse(this);
        this.tree = new MyTree(this, 5, 2, 5, 4, null, null);
        this.treeGPatch = new MyTreeGroupPatch(this);
        this.treeRPatch = new MyTreeRowPatch(this);
        this.lamp = new MyLamp(this,7,0.5,1.5,1.5);

        //Objects connected to MyInterface


        //Objects connected to MyInterface



    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(60, 30, 60), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();
        
        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.displayBackground();

        // this.treeGPatch.display();
        // this.house.display();
        this.lamp.display();

        // ---- END Primitive drawing section
    }
    displayBackground() {
        // this.texture.apply();
        // this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.pushMatrix();
        this.translate(0, 2, 0);
        this.map.display();
        this.popMatrix();

        // this.terrainTex.apply();
        this.pushMatrix();
        this.scale(100, 1, 100);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.terrain.updateTexCoords([
			-3,3,
			3,3,
			-3,-3,
			3,-3
		]) 
        this.terrain.display();
        this.popMatrix();
    }
}