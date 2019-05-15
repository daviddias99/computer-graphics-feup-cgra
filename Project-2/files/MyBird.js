class MyBird extends CGFobject {
	constructor(scene, x, y, z, ori) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
        this.x = this.x0 = x;
        this.y = this.y0 = y;
        this.z = this.z0 = z;
        this.speed = 0;
        this.orientation = ori;
	}
	initBuffers() {
        this.head = new MyBirdHead(this.scene);
        this.body = new MyBirdBody(this.scene);
    }

    initMaterials(){

    }

    update(t) {
        this.y = this.y0 + Math.sin(t / 300) / 3;
        this.x += this.speed;
        // TODO: incrementar as posicoes tendo em conta a orientacao
    }

    turn(v) {
        // TODO: alterar a orientacao
    }

    accelerate(v) {
        this.speed += v;
    }

	display() {
        this.scene.pushMatrix();

        this.scene.translate(this.x + 0.7, this.y + 0.6, this.z);
        this.scene.scale(0.9, 0.9, 0.9);
        this.head.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.body.display();

        this.scene.popMatrix();
    }
}
    