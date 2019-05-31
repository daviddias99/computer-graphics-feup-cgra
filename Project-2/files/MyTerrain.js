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
        this.terrainShader.setUniformsValues({uSampler2: 1 , uSampler3 : 2, uSampler4 : 3, uSampler5 : 4,timeFactor: 0});  
    }


    initMaterials(){

        this.heightmap = new CGFtexture(this.scene,"images/heightmap7.jpg");
		this.altimetry = new CGFtexture(this.scene,"images/altimetry.png");
        this.terrain = new CGFtexture(this.scene,"images/terrain2.jpg");
        this.waterMap_region = new CGFtexture(this.scene,"images/waterMap_region.jpg");
        this.waterMap = new CGFtexture(this.scene,"images/waterMap.jpg");
    }

    setUniform(t){

        this.terrainShader.setUniformsValues({uSampler2: 1 , uSampler3 : 2, uSampler4 : 3, uSampler5 : 4,timeFactor: t / 100 % 1000});  
    }

	display() {
        
        this.terrain.bind(0);
        this.heightmap.bind(1);
        this.altimetry.bind(2);  
        this.waterMap.bind(3);  
        this.waterMap_region.bind(4);  
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
    