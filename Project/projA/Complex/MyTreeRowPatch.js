/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyTreeRowPatch object
 */

function getRandNumber(a,b){


    return (Math.random() * (b -a) + a);
}

class MyTreeRowPatch extends CGFobject {
	constructor(scene) {
        super(scene);

        this.initBuffers();

	}
	initBuffers() {
        
        this.trunkRadius = 0.8;
        this.trunkHeight = 1;
        this.treeTopRadius = 1.5;
        this.treeTopHeight = 5;
        this.minimumScaleFactor = 0.5;
        this.defaultTreeDistance = 4 * this.treeTopRadius;
        this.maximumOffsetDistance = this.treeTopRadius;
        this.tree = new MyTree(this.scene,this.trunkHeight,this.trunkRadius,this.treeTopHeight,this.treeTopRadius,'images/bark.jpg','images/foliage.jpg');

        this.xOffsets = [];
        this.zOffsets = [];
        this.sizeScalingsHeight = [];
        this.sizeScalingsWidth = [];

        for(let i = 0; i < 6; i++){

            this.xOffsets.push(getRandNumber(-1,1)*this.maximumOffsetDistance);
            this.zOffsets.push(getRandNumber(-1,1)*this.maximumOffsetDistance);
            this.sizeScalingsHeight.push(getRandNumber(0.8,1),getRandNumber(0.8,1),getRandNumber(0.8,1));
            this.sizeScalingsWidth.push(getRandNumber(0.8,1),getRandNumber(0.8,1),getRandNumber(0.8,1));

        }


    }

    getTreeScalingH(i){

        return this.sizeScalingsHeight[i] < this.minimumScaleFactor ? this.minimumScaleFactor : this.sizeScalingsHeight[i];
    }

    getTreeScalingW(i){

        return this.sizeScalingsWidth[i] < this.minimumScaleFactor ? this.minimumScaleFactor : this.sizeScalingsWidth[i];
    }
    
    
	display() {
        
        for(let i = 0; i < 6; i++){

            this.scene.pushMatrix();
            
            let currentScalingHeight = this.getTreeScalingH(i);
            let currentScalingWidth = this.getTreeScalingW(i);

            this.scene.translate(i * this.defaultTreeDistance + this.xOffsets[i], 0, this.zOffsets[i]);
            this.scene.scale(currentScalingWidth, currentScalingHeight, currentScalingWidth);
            this.tree.display();

            this.scene.popMatrix();

            
        }
    }
}