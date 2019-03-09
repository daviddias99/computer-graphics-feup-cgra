/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleBig1 = new MyTriangleBig(this.scene);
        this.triangleSmall1 = new MyTriangleSmall(this.scene);
        this.triangleBig2 = new MyTriangleBig(this.scene);
		this.triangleSmall2 = new MyTriangleSmall(this.scene);
    }
    

    enableNormalViz() {

        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleBig1.enableNormalViz();
        this.triangleSmall1.enableNormalViz();
        this.triangleBig2.enableNormalViz();
        this.triangleSmall2.enableNormalViz();

    }

    disableNormalViz() {

        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleBig1.disableNormalViz();
        this.triangleSmall1.disableNormalViz();
        this.triangleBig2.disableNormalViz();
        this.triangleSmall2.disableNormalViz();

    }


	display() {
		this.scene.pushMatrix();

        
        var diamondR = [Math.cos(Math.PI / 4.0), Math.sin(Math.PI / 4.0), 0.0, 0.0,
                        -Math.sin(Math.PI / 4.0), Math.cos(Math.PI / 4.0), 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0];

        var diamondR2 = [Math.cos(-Math.PI / 6.0), Math.sin(-Math.PI / 6.0), 0.0, 0.0,
                        -Math.sin(-Math.PI / 6.0), Math.cos(-Math.PI / 6.0), 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0];
                    
        var diamondT = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        -Math.sqrt(2) / 2.0, Math.sqrt(2) / 2.0, 0.0, 1.0];
        
        this.scene.multMatrix(diamondR2);
        this.scene.multMatrix(diamondT);
        this.scene.multMatrix(diamondR);

        this.diamond.display(); 
        // ---- 

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(-Math.PI / 4 - Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(0, -1, 0);
        
        this.triangleSmall1.display();

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(-Math.sqrt(2.0), 0.0, 0);
        this.scene.rotate(-Math.PI / 4, 0.0, 0.0, 1.0);
        this.scene.scale(1.0, -1.0, 1.0);

        this.parallelogram.display();  

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.scene.translate(-2, 0, 0);

       this.triangleBig1.display();

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(Math.sqrt(8), 2 - Math.sqrt(2), 0);
        this.scene.rotate(Math.PI, 0.0, 0.0, 1.0);

        this.triangleBig2.display();
    
        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(- Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(- 3 * Math.PI / 4, 0, 0, 1);

        this.triangle.display();

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(2 + Math.sqrt(8), 2 - Math.sqrt(2), 0);
        this.scene.rotate(- 3 * Math.PI / 4, 0, 0, 1);
        this.scene.translate(0, -1, 0);
        
        this.triangleSmall2.display();
        this.scene.popMatrix();
	}
}