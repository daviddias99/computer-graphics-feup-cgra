/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.terrainShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.plane = new Plane(this.scene, 32);
        this.terrainShader.setUniformsValues({uSampler2: 1 , uSampler3 : 2});  
    }


    initMaterials(){

        this.heightmap = new CGFtexture(this.scene,"images/heightmap.jpg");
		this.altimetry = new CGFtexture(this.scene,"images/altimetry.png");
        this.terrain = new CGFtexture(this.scene,"images/terrain.jpg");


        this.appearance = new CGFappearance(this.scene);
		this.appearance.setAmbient(1, 1, 1, 1);
		this.appearance.setDiffuse(1, 1, 1, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(120);
        this.appearance.setTextureWrap('CLAMP_TO_EDGE', 'REPEAT');
        this.appearance.setTexture(this.terrain);
    }


	display() {

        this.heightmap.bind(1);
        this.altimetry.bind(2);  
        this.scene.setActiveShader(this.terrainShader);    
        this.appearance.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}
    