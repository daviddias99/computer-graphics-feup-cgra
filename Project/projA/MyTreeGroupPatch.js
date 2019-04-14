/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyTreeGroupPatch object
 */

function getRandNumber(a,b){


    return (Math.random() * (b -a) + a);
}

class MyTreeGroupPatch extends CGFobject {
	constructor(scene) {
        super(scene);

        this.initBuffers();

	}
	initBuffers() {
        
        this.trunkRadius = 1.5;
        this.trunkHeight = 3.5;
        this.treeTopRadius = 3;
        this.treeTopHeight = 5;
        this.minimumScaleFactor = 0.5;
        this.defaultTreeDistance = 3 * this.treeTopRadius;
        this.maximumOffsetDistance = this.treeTopRadius/2;

        this.tree = new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,'images/bark.jpg','images/foliage.jpg');

        this.xOffsets = [];
        this.zOffsets = [];
        this.sizeScalings = [];

        for(let i = 0; i < 3; i++){

            this.xOffsets.push([getRandNumber(-1,1)*this.maximumOffsetDistance,getRandNumber(-1,1)*this.maximumOffsetDistance,getRandNumber(-1,1)*this.maximumOffsetDistance]);
            this.zOffsets.push([getRandNumber(-1,1)*this.maximumOffsetDistance,getRandNumber(-1,1)*this.maximumOffsetDistance,getRandNumber(-1,1)*this.maximumOffsetDistance]);
            this.sizeScalings.push([getRandNumber(0.8,1),getRandNumber(0.8,1),getRandNumber(0.8,1)]);

        }


    }

    getTreeScaling(i,j){

        return this.sizeScalings[i][j] < this.minimumScaleFactor ? this.minimumScaleFactor : this.sizeScalings[i][j];
    }
    
	display() {
        this.scene.pushMatrix();
        
        for(let i = 0; i < 3; i++){

            for(let j = 0; j < 3; j++){

                this.scene.pushMatrix();
                
                let currentScaling = this.getTreeScaling(i,j);

                this.scene.translate(i*this.defaultTreeDistance + this.xOffsets[i][j],0, j*this.defaultTreeDistance + this.zOffsets[i][j]);
                this.scene.scale(currentScaling,currentScaling,currentScaling);
                this.tree.display();

                this.scene.popMatrix();
                
            }
        }

        this.scene.popMatrix();
    }
    


}