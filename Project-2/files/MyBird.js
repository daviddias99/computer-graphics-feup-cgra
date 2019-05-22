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
        
        this.normalState = 0;
        this.descendState = 1;
        this.ascendState = 2;
        this.hasBranch = false;
        this.branch = null;

        this.state = this.normalState;
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
        let verticalRange = 0.4;
        
        // up and down movement
        switch (this.state) {
        case 0:
            this.y = this.y0 + Math.sin(t / timeFactor * this.speedFactor) * verticalRange;
            break;
        case 1:
            this.y -= 0.3 * this.speedFactor;
            console.log("go down");
            if (this.y < 2) {
                if (this.hasBranch)
                    ;// TODO: drop in nest
                else 
                    this.pickBranch();   
            
                this.ascend();
            }

                
            break;
        case 2:
            this.y += 0.3 * this.speedFactor;
            if (this.y > this.y0)
                this.stop();
            break;
        }   

        // (chicken) WINGS      ==
        let wingRange = Math.PI * 40 / 180; 
        this.wingAlfa = - Math.sin(t  / timeFactor * this.speedFactor) * wingRange;

        // update position
        this.x += this.speed * Math.cos(-this.orientation) * this.speedFactor;
        this.z += this.speed * Math.sin(-this.orientation) * this.speedFactor;

        if (this.hasBranch) {
            this.branch.x = this.z;
            this.branch.y = this.y - 2;
            this.branch.z = this.z;
        }
    }

    turn(v) {
        if (v > 0)
            this.orientation += 0.2;// * this.speedFactor;
        else if (v < 0)
            this.orientation -= 0.2;// * this.speedFactor;
    }

    accelerate(v) {
        if (v > 0)
            this.speed += 0.2;// * this.speedFactor;
        else if (v < 0)
            this.speed -= 0.2;// * this.speedFactor;
    }

    descend() {
        if (this.state == this.normalState)
            this.state = this.descendState;
    }

    ascend() {
        this.state = this.ascendState;
    }

    stop() {
        this.state = this.normalState;
        this.y = this.y0;
    }   

    pickBranch() {
        console.log("try to pick lanch");
        for (let i = 0; i < this.scene.numBranches; i++) {
            if ((this.scene.branches[i].x > this.x - 0.5 && this.scene.branches[i].x < this.x + 0.5) &&
                (this.scene.branches[i].z > this.z - 0.5 && this.scene.branches[i].z < this.z + 0.5)) {
                console.log("branch x " + this.scene.branches[i].x);
                console.log("branch z " + this.scene.branches[i].z);
                console.log("bird x " + this.x);
                console.log("bird z " + this.z);
                this.branch = this.scene.branches[i];
                this.scene.numBranches--;
                this.hasBranch = true;
            }
        }
    }

    reset() {
        this.x = this.x0;
        this.y = this.y0;
        this.z = this.z0;
        this.speed = 0;
        this.orientation = 0;
        this.wingAlfa = 0;
        this.state = this.normalState;
    }

	display() {
        // translate and rotate bird in its current position and orientation
        if (this.hasBranch)
            this.branch.display();
        

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);


        // draw bird head

        let headSideSize = 0.8;
    
        this.scene.pushMatrix();
        
        this.scene.translate(0.7, 0.6 , 0 );
        this.scene.scale(headSideSize, headSideSize, headSideSize);
        this.head.display();

        this.scene.popMatrix();

        // draw bird body

        let bodySideSize = 1;

        this.scene.pushMatrix();
       
        this.scene.scale(bodySideSize , bodySideSize , bodySideSize );
        this.body.display();

        this.scene.popMatrix();

        // draw bird wings

        this.scene.pushMatrix();

        this.scene.translate(0, 0, - bodySideSize / 2 );
        this.scene.rotate(this.wingAlfa, 1, 0, 0);
        this.wing.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0, 0, bodySideSize / 2);
        this.scene.scale(1, 1, -1);
        this.scene.rotate(this.wingAlfa, 1, 0, 0);
        this.wing.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
    