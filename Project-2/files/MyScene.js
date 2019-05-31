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

        this.setUpdatePeriod(50);

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Appearance
        this.appearance = new CGFappearance(this);
		this.appearance.setAmbient(1, 1, 1, 1);
		this.appearance.setDiffuse(1, 1, 1, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(120);
        this.appearance.setTextureWrap('CLAMP_TO_EDGE', 'REPEAT');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.terrain = new MyTerrain(this);
        this.lightning = new MyLightning(this,1500);
        this.plane = new Plane(this);
        this.skybox = new MySkybox(this);
        this.nest = new MyNest(this);
        this.house = new MyHouse(this);
        this.bird = new MyBird(this, 0, 10, 0);

        this.genLightning = false;


        this.branches = [];
        this.trees = [];
        this.generateBranches(5);
        this.generateTrees();
        
        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }


    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t) {

        this.checkKeys();

        if (this.genLightning){
            this.lightning.doGenerate();
            this.lightning.startAnimation(t);
            this.genLightning = false;
        }
            
        this.bird.update(t);
        this.lightning.update(t);
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

        // Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section


        this.terrain.display();
        this.lightning.display();
        this.skybox.display();
        this.bird.display(); 
        this.displayBranches();
        this.displayHouse();
        this.displayTrees();

        // ---- END Primitive drawing section 
    }

    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        
        // Check for key codes e.g. in ​ https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
            this.bird.accelerate(1);
        }
        if (this.gui.isKeyPressed("KeyS")) { 
            text += " S ";
            keysPressed = true;
            this.bird.accelerate(-1);
        }
        if (this.gui.isKeyPressed("KeyA")) { 
            text += " A ";
            keysPressed = true;
            this.bird.turn(1);
        }
        if (this.gui.isKeyPressed("KeyD")) { 
            text += " D ";
            keysPressed = true;    
            this.bird.turn(-1);
        }
        if (this.gui.isKeyPressed("KeyR")) { 
            text += " R ";
            keysPressed = true;    
            this.bird.reset();
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            keysPressed = true;
            this.bird.descend();
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            keysPressed = true;

            this.genLightning = true;
        }
        if(keysPressed)
            console.log(text);
    }

    generateBranches(num) {
        for (let i = 0; i < num; i++) {
            let x = this.getRandomArbitrary(-10, 10);
            let y = 0.2;
            let z = this.getRandomArbitrary(-10, 10);
            let o = this.getRandomArbitrary(0, 360);

            this.branches[i] = new MyTreeBranch(this, x, y, z, o);
        }
    }

    generateTrees(){

        this.trees[0] = new MyLSPlant(this,8,0,-5);
        this.trees[1] = new MyLSPlant(this,5,0,-2);
        this.trees[2] = new MyLSPlant(this,4,0,4);
        this.trees[3] = new MyLSPlant(this,3,0,5);
        this.trees[4] = new MyLSPlant(this,-6,0,0);
        this.trees[5] = new MyLSPlant(this,2,0,6);
    }

    displayBranches() {
        for (let i = 0; i < this.branches.length; i++)
            this.branches[i].display();
    }

    displayTrees() {
        for (let i = 0; i < this.trees.length; i++)
            this.trees[i].display();
    }


    displayHouse() {

        this.pushMatrix();

        this.translate(-3.5,0,-4.5);
        this.rotate(Math.PI/8,0,1,0);

        this.house.display();
        this.popMatrix();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
    
