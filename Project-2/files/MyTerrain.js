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

        this.heightmap = new CGFtexture(this.scene,"images/heightmap7.jpg");
		this.altimetry = new CGFtexture(this.scene,"images/altimetry.png");
        this.terrain = new CGFtexture(this.scene,"images/terrain2.jpg");

    }

    setUniform(t){

        this.terrainShader.setUniformsValues({uSampler2: 1 , uSampler3 : 2});  
    }

	display() {
        
        this.terrain.bind(0);
        this.heightmap.bind(1);
        this.altimetry.bind(2);  
        this.scene.setActiveShader(this.terrainShader);    
        this.scene.pushMatrix();

        this.scene.translate(0,-1.15,0);
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}
    