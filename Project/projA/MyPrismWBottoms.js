/**
 * MyCylinderWBottoms
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPrismWBottoms extends CGFobject {

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

		this.prism = new MyCylinder(this.scene,this.slices,null);
        this.bottom = new MyRegPolygon(this.scene,this.slices,-1);

    }
    

	display() {
        this.scene.pushMatrix();

        // bottom face
        this.bottom.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // side
        this.scene.scale(1,this.height,1);
        this.prism.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // top face
        this.scene.translate(0,this.height,0);
        this.scene.rotate(-Math.PI,1,0,0);
        this.bottom.display();

        this.scene.popMatrix();
        

    }
    

}