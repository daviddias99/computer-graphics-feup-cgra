/**
 * MyConeWBottoms
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyConeWBottoms extends CGFobject {

	constructor(scene, slices, stacks,height, sideTexture, bottomTexture, textureMode) {
        super(scene);
        
        this.slices = slices;
        this.stacks = stacks;
        this.textureMode = textureMode;

        height === null ? this.height = 1 : this.height = height;
            
        this.sideTexture =sideTexture;
        this.bottomTexture =bottomTexture;

        this.initBuffers();
	}
	initBuffers() {

		this.cone = new MyCone(this.scene,this.slices,null,this.textureMode);
        this.bottom = new MyRegPolygon(this.scene,this.slices,-1);

    }
    
    
	display() {
        this.scene.pushMatrix();

        this.bottomTexture.apply();
        this.bottom.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(1,this.height,1); // adjust for height
        this.sideTexture.apply();
        this.cone.display();

        this.scene.popMatrix();

    }
    
}