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

        this.scaleFactor = 1;
        this.speedFactor = 1;
	}
	initBuffers() {
        this.head = new MyBirdHead(this.scene);
        this.body = new MyBirdBody(this.scene);
    }

    initMaterials(){

    }

    update(t) {
        this.y = this.y0 + Math.sin(t * this.speedFactor / 250) / 3 ;
        this.x += this.speed * Math.cos(-this.orientation);
        this.z += this.speed * Math.sin(-this.orientation);
        // TODO: (chicken) WINGS      
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
    }

	display() {
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.scale(0.9, 0.9, 0.9);
        this.scene.translate(0.7 * this.scaleFactor, 0.6 * this.scaleFactor, 0 * this.scaleFactor);
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.head.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.body.display();

        this.scene.popMatrix();
    }
}
    