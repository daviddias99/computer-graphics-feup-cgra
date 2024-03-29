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

        let texCoords = [
            -3, -3,
            3, -3,
            -3, 3,
            3, 3
        ];
        this.terrain = new MyQuad(this, 100, texCoords);

        this.treeGPatch = new MyTreeGroupPatch(this);
        this.treeRPatch = new MyTreeRowPatch(this);
        this.hillSmall = new MyVoxelHill(this,3);
        this.hillLarge = new MyVoxelHill(this,7);
        this.pool = new MyPool(this);
        this.house = new MyHouse(this);
        this.firepit = new MyFirepit(this);
        
        //Objects connected to MyInterface

        this.displayAxis = false;
        this.showTextures = true; 
        this.dayNightSelector = { 'Day': 0 , 'Night': 1};
        this.timeOfDay = 0;
        this.lights[this.timeOfDay].enable();
    }
    initLights() {

        //  sun light (warm)

        this.lights[0].setConstantAttenuation(0.3);
        this.lights[0].setPosition(-10, 14, -15, 1.0);
        this.lights[0].setDiffuse(1, 1, 0.8, 1.0);
        this.lights[0].setSpecular(1, 1, 0.8, 1.0);
        this.lights[0].setSpotDirection(1,-1,1);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        //  moon light (cold)

        this.lights[1].setConstantAttenuation(0.7);
        this.lights[1].setPosition(19, 14, -15, 1.0);
        this.lights[1].setDiffuse(0.1, 0.3, 0.6, 1.0);
        this.lights[1].setSpecular(0.1, 0.3, 0.6, 1.0);
        this.lights[1].setSpotDirection(1,-1,1);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();

        //  firepit (warm, large attenuation)

        this.lights[2].setQuadraticAttenuation(0.2);
        this.lights[2].setPosition(2.4, 0.8, 3, 1.0);
        this.lights[2].setDiffuse(1, 1, 0.4, 1.0);
        this.lights[2].setSpecular(1, 1, 0.4, 1.0);
        this.lights[2].disable();
        this.lights[2].setVisible(false);
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 15, 30), vec3.fromValues(0, 0, 0));
    }

    switchTimeOfDay(time){

        if(time == 0){

            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].disable();
            this.skyMaterial.loadTexture('images/xp_day.png');
        } else {

            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].enable();
            this.skyMaterial.loadTexture('images/xp_night.png');
        }

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

        // Enable/Disable textures
        this.enableTextures(this.showTextures);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        // Update lights
        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

        // ---- BEGIN Object drawing section

        this.displayBackground();
        this.scale(1.5,1.5,1.5);
        this.pushMatrix();
        
        // house

        this.scale(0.7,0.7,0.7);
        this.house.display();

        this.popMatrix();
        this.pushMatrix();

        // hill small

        this.translate(3,0,3);    
        this.scale(0.3,0.3,0.3);
        this.translate(0,0.5,0);
        this.hillSmall.display();

        this.popMatrix();
        this.pushMatrix();

        // hill large

        this.translate(-5,0,-5);
        this.rotate(Math.PI/7,0,1,0);    
        this.scale(0.3,0.3,0.3);
        this.translate(0,0.5,0);
        this.hillLarge.display();

        this.popMatrix();
        this.pushMatrix();

        // tree row patch 1

        this.translate(7,0,-3);
        this.rotate(-Math.PI/2,0,1,0);
        this.scale(0.3,0.3,0.3);
        this.treeRPatch.display();

        this.popMatrix();
        this.pushMatrix();

        // tree group patch 1

        this.rotate(-Math.PI / 8, 0, 1, 0);
        this.translate(0, 0, -6);
        this.scale(0.2, 0.2, 0.2);
        this.treeGPatch.display();


        this.popMatrix();
        this.pushMatrix();

        // tree row patch 2

        this.translate(-2,0,5.5);
        
        this.scale(0.25,0.3,0.25);
        this.treeRPatch.display();

        this.popMatrix();
        this.pushMatrix();

        // tree group patch 2

        this.rotate(-Math.PI / 6, 0, 1, 0);
        this.translate(-5, 0, 2.6);
        this.scale(0.20, 0.15, 0.20);
        this.treeGPatch.display();


        this.popMatrix();
        this.pushMatrix();

        // pool

        this.translate(0,0,2);
        this.scale(0.15,0.1,0.15);
        this.pool.display();

        this.popMatrix();
        this.pushMatrix();

        // fire pit

        this.translate(1.5,0,2);
        this.scale(0.4,0.4,0.4);
        this.firepit.display();

        this.popMatrix();

        // ---- END Object drawing section

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
        this.skyMaterial.loadTexture('images/xp_day.png');
        this.skyMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }

    displayBackground() {

        
        this.skyMaterial.apply();
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        
        this.pushMatrix();
        this.translate(0, 4, 0);
        this.map.display();

        this.popMatrix();
        this.pushMatrix();
        
        this.scale(40, 1, 40);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        
        
        this.floorMaterial.apply();
        this.terrain.display();
        this.popMatrix();
    }
}