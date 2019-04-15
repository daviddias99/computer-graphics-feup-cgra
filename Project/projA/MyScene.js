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
        this.initMaterials();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.map = new MyCubeMap(this);
        this.terrain = new MyQuad(this,null);

        this.treeGPatch = new MyTreeGroupPatch(this);
        this.treeRPatch = new MyTreeRowPatch(this);
        this.pool = new MyPool(this);
        this.house = new MyHouse(this);
        this.pol = new MyRegPolygon(this,20,1);
        
        //Objects connected to MyInterface


    }
    initLights() {

        //  sun light (warm)

        // this.setGlobalAmbientLight(0.9, 0.9, 0.9, 1.0);

        this.lights[0].setConstantAttenuation(0.3);
        this.lights[0].setPosition(-50, 70, -90, 1.0);
        // this.lights[0].setAmbient(1, 1, 0.85, 1.0);
        this.lights[0].setDiffuse(1, 1, 0.8, 1.0);
        this.lights[0].setSpecular(1, 1, 0.8, 1.0);
        this.lights[0].setSpotDirection(1,-1,1);
        this.lights[0].enable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        //  moon light (cold)

        // this.setGlobalAmbientLight(0.9, 0.9, 0.9, 1.0);

        // this.lights[1].setConstantAttenuation(0.40);
        // this.lights[1].setPosition(-50, 70, -90, 1.0);
        // // this.lights[1].setAmbient(1, 1, 0.85, 1.0);
        // this.lights[1].setDiffuse(0.15, 0.3, 0.3, 1.0);
        // this.lights[1].setSpecular(0.15, 0.3, 0.3, 1.0);
        // this.lights[1].setSpotDirection(1,-1,1);
        // this.lights[1].enable();
        // this.lights[1].setVisible(true);
        // this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 20, 15), vec3.fromValues(0, 0, 0));
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
        // this.axis.display();
        // this.lights[1].update();
        this.lights[0].update();
        
        //Apply default appearance
        // this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.displayBackground();
        // this.treeGPatch.display();
        //this.pool.display();
        this.house.display();
        //this.scale(0.1,0.1,0.1);

        this.pushMatrix();

        this.translate(-30,0,-30);
        this.treeGPatch.display();

        this.popMatrix();
        this.pushMatrix();

        this.translate(8,0,-40);
        this.treeGPatch.display();

        this.popMatrix();
        this.pushMatrix();


        this.rotate(-Math.PI/3,0,1,0);
        this.translate(0,0,-30);
        
        this.treeRPatch.display();
        
        this.popMatrix();


        this.pushMatrix();
        this.scale(0.5,0.5,0.5);
        this.pool.display();

        this.popMatrix();
        this.pushMatrix();
        
        this.test.apply();
        this.translate(0,6,0);
        this.pol.display();

        this.popMatrix();
    
        // ---- END Primitive drawing section
    }

    initMaterials(){

        // scene grass floor
        let factor = 0.8;
        this.floorMaterial = new CGFappearance(this);
        this.floorMaterial.setAmbient(factor, factor, factor, 1.0);
        this.floorMaterial.setDiffuse(factor, factor, factor, 1.0);
        this.floorMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.floorMaterial.setShininess(5.0);  
        this.floorMaterial.loadTexture('images/grass.jpg');
        this.floorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // skybox material
        this.skyMaterial = new CGFappearance(this);
        this.skyMaterial.setEmission(1, 1, 1, 1);
        this.skyMaterial.loadTexture('images/xp.png');
        this.skyMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAM_TO_EDGE');

        /// testing materials


        
        this.test = new CGFappearance(this);
        this.test.setAmbient(factor, factor, factor, 1.0);
        this.test.setDiffuse(factor, factor, factor, 1.0);
        this.test.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.test.setShininess(5.0);  
        this.test.loadTexture('images/david.jpg');
        this.test.setTextureWrap('REPEAT', 'REPEAT');
    }

    displayBackground() {
        this.skyMaterial.apply();
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.pushMatrix();
        this.translate(0, 2, 0);
        this.map.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(20, 1, 20);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.terrain.updateTexCoords([
			-3,3,
			3,3,
			-3,-3,
			3,-3
        ]) 
        
        this.floorMaterial.apply();
        this.terrain.display();
        this.popMatrix();
    }
}