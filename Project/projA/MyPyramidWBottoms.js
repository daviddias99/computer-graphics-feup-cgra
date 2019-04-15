/**
 * MyPyramidWBottoms
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPyramidWBottoms extends CGFobject {

	constructor(scene, slices, stacks,height, sideTexture, bottomTexture) {
        super(scene);
        
        this.slices = slices;
        this.stacks = stacks;

        height === null ? this.height = 1 : this.height = height;
            
        this.sideTexture =sideTexture;
        this.bottomTexture =bottomTexture;

        this.initBuffers();
	}
	initBuffers() {

		this.pyramid = new MyPyramid(this.scene,this.slices,null);
        this.bottom = new MyRegPolygon(this.scene,this.slices,-1);

    }
    
    
	display() {
        this.scene.pushMatrix();

        this.bottom.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(1,this.height,1); // adjust for height
        this.pyramid.display();

        this.scene.popMatrix();

    }
    
}