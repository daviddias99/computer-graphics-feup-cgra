class MyBird extends CGFobject {
	constructor(scene, x, y, z) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
        this.x = this.x0 = x;
        this.y = this.y0 = y;
        this.z = this.z0 = z;
        this.speed = 0;
        this.orientation = 0;
        this.wingAlfa = 0;

        this.scaleFactor = 3;
        this.speedFactor = 1;
	}
	initBuffers() {
        this.head = new MyBirdHead(this.scene);
        this.body = new MyBirdBody(this.scene);
        this.wing = new MyBirdWing(this.scene);
    }

    initMaterials() {

    }

    update(t) {

        let timeFactor = 250;

        // up and down movement
        let verticalRange = 0.4;
        this.y = this.y0 + Math.sin(t / timeFactor * this.speedFactor) * verticalRange;

        // (chicken) WINGS      
        let wingRange = Math.PI * 40 / 180; 
        this.wingAlfa = - Math.sin(t  / timeFactor * this.speedFactor) * wingRange;

        // update position
        this.x += this.speed * Math.cos(-this.orientation) * this.speedFactor;
        this.z += this.speed * Math.sin(-this.orientation) * this.speedFactor;
    }

    turn(v) {
        if (v > 0)
            this.orientation += 0.2 * this.speedFactor;
        else if (v < 0)
            this.orientation -= 0.2 * this.speedFactor;
    }

    accelerate(v) {
        if (v > 0)
            this.speed += 0.2 * this.speedFactor;
        else if (v < 0)
            this.speed -= 0.2 * this.speedFactor;
    }

    reset() {
        this.x = this.x0;
        this.y = this.y0;
        this.z = this.z0;
        this.speed = 0;
        this.orientation = 0;
        this.wingAlfa = 0;
    }

	display() {
        
        // translate and rotate bird in its current position and orientation

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);


        // draw bird head

        let headSideSize = 0.8;
    
        this.scene.pushMatrix();
        
        this.scene.translate(0.7 * this.scaleFactor, 0.6 * this.scaleFactor, 0 * this.scaleFactor);
        this.scene.scale(headSideSize * this.scaleFactor, headSideSize * this.scaleFactor, headSideSize * this.scaleFactor);
        this.head.display();

        this.scene.popMatrix();

        // draw bird body

        let bodySideSize = 1;

        this.scene.pushMatrix();
       
        this.scene.scale(bodySideSize * this.scaleFactor, bodySideSize * this.scaleFactor, bodySideSize * this.scaleFactor);
        this.body.display();

        this.scene.popMatrix();

        // draw bird wings

        this.scene.pushMatrix();

        this.scene.translate(0, 0, - bodySideSize / 2 * this.scaleFactor);
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.scene.rotate(this.wingAlfa, 1, 0, 0);
        this.wing.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0, 0, bodySideSize / 2 * this.scaleFactor);
        this.scene.scale(this.scaleFactor, this.scaleFactor, - this.scaleFactor);
        this.scene.rotate(this.wingAlfa, 1, 0, 0);
        this.wing.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
    