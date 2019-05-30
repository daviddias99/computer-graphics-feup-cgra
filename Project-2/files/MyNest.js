/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */

function getRandNumber(a,b){
    
    return (Math.random() * (b-a) + a);
}

class MyNest extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
        this.genRandoms();
	}

    initMaterials() {

        // wood

        let factorTT = 0.8;
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.woodMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(5.0);  
        this.woodMaterial.loadTexture('images/bark.jpg');
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // bottomWood

        let factorT = 0.6;
        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.bottomMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.bottomMaterial.setShininess(4.0);  
        this.bottomMaterial.loadTexture('images/wood_rings.jpg');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }
	initBuffers() {
		this.log = new MyCylinderWBottoms(this.scene, 15, 5, 5, this.woodMaterial, this.bottomMaterial);
		this.bottom = new MyRegPolygon(this.scene,20,1);
		this.egg = new MyEgg(this.scene);
    }

	display() {
        
        this.scene.pushMatrix();

        for(let i = 0; i < 360/6;i++){

            let factor = 1;

            this.scene.pushMatrix();
        
            this.scene.rotate(i*Math.PI/6 + this.rands[i],0,1,0);

            if(i%2)
                factor *=-1;


            this.scene.rotate(factor*Math.PI/8 + this.rands[360/6+i],0,0,1);

            this.scene.translate(0,0,4);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.translate(0,-2.5,0);
            this.scene.scale(0.1,1,0.1);
            this.log.display();
    
            this.scene.popMatrix();

        }

        this.scene.rotate(Math.PI/5,1,1,0);
        this.scene.scale(0.8,1,0.8);


        for(let i = 0; i < 360/6;i++){

            let factor = 1;

            this.scene.pushMatrix();
        
            this.scene.rotate(i*Math.PI/6 + this.rands[i],0,1,0);

            if(i%2)
                factor *=-1;


            this.scene.rotate(factor*Math.PI/8 + this.rands[360/6+i],0,0,1);

            this.scene.translate(0,0,4);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.translate(0,-2.5,0);
            this.scene.scale(0.1,1,0.1);
            this.log.display();
    
            this.scene.popMatrix();

        }

        this.scene.rotate(Math.PI/6,-1,1,-1);
        this.scene.scale(1,1,1,1.1);


        for(let i = 0; i < 360/6;i++){

            let factor = 1;

            this.scene.pushMatrix();
        
            this.scene.rotate(i*Math.PI/6 + this.rands[i],0,1,0);

            if(i%2)
                factor *=-1;


            this.scene.rotate(factor*Math.PI/8 + this.rands[360/6+i],0,0,1);

            this.scene.translate(0,0,4);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.translate(0,-2.5,0);
            this.scene.scale(0.1,1,0.1);
            this.log.display();
    
            this.scene.popMatrix();

        }

        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.scale(0.95,1,0.95);


        for(let i = 0; i < 360/6;i++){

            let factor = 1;

            this.scene.pushMatrix();
        
            this.scene.rotate(i*Math.PI/6 + this.rands[i],0,1,0);

            if(i%2)
                factor *=-1;


            this.scene.rotate(factor*Math.PI/8 + this.rands[360/6+i],0,0,1);

            this.scene.translate(0,0,4);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.translate(0,-2.5,0);
            this.scene.scale(0.1,1,0.1);
            this.log.display();
    
            this.scene.popMatrix();

        }

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // draw bottom

        this.scene.translate(0,-1,0);
        this.scene.scale(4,1,4);

        this.bottom.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // draw egg 1

        this.scene.translate(0,0,2.3);
        this.scene.rotate(Math.PI/4,1,1,0);
        this.scene.translate(0,-0.5,0);
        this.scene.scale(0.7,0.7,0.7);
        this.egg.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // draw egg 2

        this.scene.translate(1.0,0,1.6);
        this.scene.rotate(Math.PI/4,0,1,1);
        this.scene.translate(0,-0.5,0);
        this.scene.scale(0.7,0.7,0.7);
        this.egg.display();


        this.scene.popMatrix();
    }


    genRandoms(){

        this.rands = [];

        for(let i = 0; i < 2*360/6; i++){

            this.rands[i] = getRandNumber(-0.2,0.2);
        }
    }

}