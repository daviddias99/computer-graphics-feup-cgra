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
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.bird = new MyBird(this, 0, 3, 0);
        this.terrain = new MyTerrain(this);
        this.bird = new MyBird(this, 0, 10, 0);
        this.branches = [];
        this.generateBranches(5);
        
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
        this.bird.update(t);
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

        // ---- END Primitive drawing section

        //this.terrain.display();
        this.bird.display(); 
        this.displayBranches();
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

    displayBranches() {
        for (let i = 0; i < this.branches.length; i++)
            this.branches[i].display();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
    
