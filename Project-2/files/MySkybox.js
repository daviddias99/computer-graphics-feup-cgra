/**
 * MySkybox
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySkybox extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        
        this.skybox = new MyCubeMap(this.scene);
    }


    initMaterials() {
        
        // skybox material
        this.skyMaterial = new CGFappearance(this.scene);
        this.skyMaterial.setEmission(1, 1, 1, 1);
        this.skyMaterial.loadTexture('images/xp_day.png');
        this.skyMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }


	display() {
        
        this.scene.pushMatrix();
        
        this.skyMaterial.apply();
        this.skybox.display();

        this.scene.popMatrix();
    }
}