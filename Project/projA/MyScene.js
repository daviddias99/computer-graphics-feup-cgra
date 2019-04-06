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
        this.map = new MyCubeMap(this);

        // this.hill = new MyVoxelHill(this,8);
        // this.prism = new MyPrism(this, 5, 5);
        // this.cyl = new MyCylinder(this, 10, 5);
        this.house = new MyHouse(this);
        //  this.tree = new MyTree(this,5,2,5,4,null,null);
        this.treeGPatch = new MyTreeGroupPatch(this);

        //Objects connected to MyInterface
        this.tex = new CGFappearance(this);
        this.tex.setAmbient(0.8, 0.8, 0.8, 1);
        this.tex.setSpecular(0.8, 0.8, 0.8, 1);
        this.tex.setDiffuse(0.8, 0.8, 0.8, 1);
        this.tex.setShininess(10);
        this.tex.loadTexture('images/david.jpg');
        this.tex.setTextureWrap('REPEAT', 'REPEAT');

        this.texture = new CGFappearance(this);
		this.texture.setAmbient(1, 1, 1, 1.0);
        this.texture.setDiffuse(0.1, 0.1, 0.1, 1.0);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.texture.setShininess(10.0);  
		this.texture.loadTexture('images/skybox.png');
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
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
        this.texture.apply();
        this.map.display();

        // this.hill.display();

        this.tex.apply();

        // this.prism.display();
        //this.cyl.enableNormalViz();
        //this.cyl.display();

        // this.tree.display();
        this.treeGPatch.display();
    

        // ---- END Primitive drawing section
    }
}