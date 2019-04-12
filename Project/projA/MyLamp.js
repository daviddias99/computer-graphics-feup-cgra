/**
 * MyLamp
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLamp extends CGFobject {

	constructor(scene, postHeight,postRadius, headHeight, headRadius, postTexture, headTexture) {
        super(scene);
        
        this.postRadius = postRadius;
        this.postHeight = postHeight;

        this.headRadius = headRadius;
        this.headHeigth = headHeight;

        this.initBuffers();
	}
	initBuffers() {

		this.post = new MyCylinder(this.scene,10,5,'images/metal.jpg');
        this.head1 = new MyPrism(this.scene,10,5,'images/metal.jpg');
        this.column = this.head1;
        this.head2 = new MyPyramid(this.scene,10,5,'images/metal.jpg');
        this.quad = new MyQuad(this.scene);

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

        // post
        this.scene.scale(this.postRadius,this.postHeight,this.postRadius);
        this.post.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // bottom head
        this.scene.translate(0,this.postHeight,0);
        this.scene.scale(this.headRadius,this.headHeigth/8,this.headRadius);
        this.head1.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // bottom plane upfacing
        this.scene.translate(0,this.postHeight + this.headHeigth/8,0);
        this.scene.scale(2*this.headRadius, 2*this.headRadius,2*this.headRadius);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // bottom plane downfacing
        this.scene.translate(0,this.postHeight + this.headHeigth/8,0);
        this.scene.scale(2*this.headRadius, 2*this.headRadius,2*this.headRadius);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // top plane upfacing
        this.scene.translate(0,this.postHeight + this.headHeigth,0);
        this.scene.scale(2*this.headRadius, 2*this.headRadius,2*this.headRadius);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // top plane downfacing
        this.scene.translate(0,this.postHeight + this.headHeigth,0);
        this.scene.scale(2*this.headRadius, 2*this.headRadius,2*this.headRadius);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // top head
        this.scene.translate(0,this.postHeight+this.headHeigth,0);
        this.scene.scale(this.headRadius,this.headHeigth,this.headRadius);
        this.head2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // column 1
        this.scene.translate(this.headRadius * 3 / 5,this.postHeight + this.headHeigth/8,this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius/7,this.headHeigth - this.headHeigth/8,this.headRadius/7);
        this.column.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // column 2
        this.scene.translate(this.headRadius * 3 / 5,this.postHeight + this.headHeigth/8,-this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius/7,this.headHeigth - this.headHeigth/8,this.headRadius/7);
        this.column.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // column 3
        this.scene.translate(-this.headRadius * 3 / 5,this.postHeight + this.headHeigth/8,this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius/7,this.headHeigth - this.headHeigth/8,this.headRadius/7);
        this.column.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // column 4
        this.scene.translate(-this.headRadius * 3 / 5,this.postHeight + this.headHeigth/8,-this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius/7,this.headHeigth - this.headHeigth/8,this.headRadius/7);
        this.column.display();
        

    }
    
    // Updates the complexity of each element of the tangram
    updateBuffers(complexity){
        


    }

}