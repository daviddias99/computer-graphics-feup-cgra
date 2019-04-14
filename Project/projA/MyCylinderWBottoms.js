/**
 * MyCylinderWBottoms
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCylinderWBottoms extends CGFobject {

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

		this.cylinder = new MyCylinder(this.scene,this.slices,null);
        this.bottom = new MyRegPolygon(this.scene,this.slices,-1);

    }
    
    /**
     * Applies the normal vizualization for each element of the tangram
     */
    enableNormalViz() {

    }

    /**
     * Disables the normal vizualization for each element of the tangram
     */
    disableNormalViz() {

    }


	display() {
        this.scene.pushMatrix();

        
        this.bottom.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scale(0,this.height,0);
        this.cylinder.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0,this.height,0);
        this.scene.rotate(-Math.PI,1,0,0);
        this.bottom.display();

        this.scene.popMatrix();
        

    }
    
    // Updates the complexity of each element of the tangram
    updateBuffers(complexity){
        


    }

}