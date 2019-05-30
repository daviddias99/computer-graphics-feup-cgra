
const State = {
    NORMAL: 1,
    DESCENDING: 2,
    ASCENDING: 3
}

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

        this.headRadius = 0.3;
        this.bodyRadius = 0.4;
        this.bodyLength = 1.6;

        this.scaleFactor = 3;
        this.speedFactor = 1;
    
        this.state = State.NORMAL;

        this.hasBranch = false;
        this.branch = null;
    }
    
	initBuffers() {
        this.head = new MyBirdHead(this.scene);
        this.body = new MyBirdBody(this.scene);
        this.wing = new MyBirdWing(this.scene);
    }

    initMaterials() {
        this.feathers = new CGFappearance(this.scene);
        this.feathers.setAmbient(1, 1, 1, 1);
        this.feathers.setDiffuse(1, 1, 1, 1);
        this.feathers.setSpecular(0.5, 0.5, 0.5, 1);
        this.feathers.setShininess(10);
        this.feathers.loadTexture('images/feathers.jpg');
        this.feathers.setTextureWrap('REPEAT', 'REPEAT');
    }

    update(t) {

        let timeFactor = 250;
        let verticalRange = 0.4;

        this.wing.update(t);
        
        // up and down movement
        switch (this.state) {
        case State.NORMAL:
            this.y = this.y0 + Math.sin(2 * t * Math.PI / 1000) * verticalRange;
            break;
        case State.DESCENDING:
            this.y -= 0.2 * this.speedFactor;
            if (this.y < (this.bodyRadius / 2 + 0.2) * this.scaleFactor) {
                if (this.hasBranch)
                    this.tryToDropBranch();    
                else 
                    this.tryToPickBranch();  
            
                this.ascend();
            }
            break;
        case State.ASCENDING:
            this.y += 0.2 * this.speedFactor;
            if (this.y > this.y0)
                this.stop();
            break;
        }   

        // (chicken) WINGS
        let wingRange =  Math.PI * 80 / 180; 
        this.wingAlfa = - Math.sin(2 * t * Math.PI / 1000) * wingRange;

        // update position
        this.x += this.speed * Math.cos(-this.orientation) * this.speedFactor;
        this.z += this.speed * Math.sin(-this.orientation) * this.speedFactor;
    }

    turn(v) {
        if (v > 0)
            this.orientation += 0.2;
        else if (v < 0)
            this.orientation -= 0.2;
    }

    accelerate(v) {
        if (v > 0)
            this.speed += 0.2;
        else if (v < 0)
            this.speed -= 0.2;
    }

    descend() {
        if (this.state == State.NORMAL)
            this.state = State.DESCENDING;
    }

    ascend() {
        this.state = State.ASCENDING
    }

    stop() {
        this.state = State.NORMAL;
        this.y = this.y0;
    }   

    isInRange(branch) {
        return (branch.x > this.x - 0.8 && branch.x < this.x + 0.8) &&
               (branch.z > this.z - 0.8 && branch.z < this.z + 0.8);
    }

    tryToPickBranch() {
        for (let i = 0; i < this.scene.branches.length; i++) 
            if (this.isInRange(this.scene.branches[i])) {
                this.pickBranch(this.scene.branches[i]);
                this.scene.branches.splice(i, 1);
            }
    }

    pickBranch(branch) {                
        this.branch = branch;
        this.branch.orientation -= this.orientation;
        this.branch.x = 0;
        this.branch.z = 0;
        this.branch.y = 0;
        this.scene.numBranches--;
        this.hasBranch = true;
    }

    tryToDropBranch() {
        //TODO: check if there is a nest and drop it there
        this.dropBranch();    
    }

    dropBranch() {
        this.branch.x = this.x;
        this.branch.z = this.z;
        this.branch.y = 0.2;
        this.branch.orientation += this.orientation;
        this.scene.branches.push(this.branch);
        this.hasBranch = false;
        this.branch = null;
    }

    reset() {
        this.x = this.x0;
        this.y = this.y0;
        this.z = this.z0;
        this.speed = 0;
        this.orientation = 0;
        this.wingAlfa = 0;
        this.state = State.NORMAL;
    }

	display() {
        this.feathers.apply();

        this.scene.pushMatrix();
        
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);

        if (this.hasBranch) {
            this.scene.pushMatrix();
            this.scene.translate(0, - this.bodyRadius * this.scaleFactor, 0);
            this.branch.display();
            this.scene.popMatrix();
        }
        
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        this.displayBody();
        this.displayHead();
        this.displayWings();

        this.scene.popMatrix();
    }

    displayBody() {
        
        this.scene.pushMatrix();
        this.scene.scale(this.bodyLength, this.bodyRadius, this.bodyRadius);
        this.feathers.apply();
        this.body.display();
        this.scene.popMatrix(); 
    }

    displayHead() {
        this.scene.pushMatrix();
        
        this.scene.translate(0.5, 0.25, 0);
        this.scene.scale(this.headRadius, this.headRadius, this.headRadius);
        this.head.display();

        this.scene.popMatrix();
    }

    displayWings() {
        this.scene.pushMatrix();

        this.scene.translate(0, this.bodyRadius * Math.sin(Math.PI / 2 - Math.PI * 2 / 5), - this.bodyRadius * Math.cos(Math.PI / 2 - Math.PI * 2 / 5));
        this.scene.rotate(this.wingAlfa, 1, 0, 0);
        this.wing.displayLeft();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0, this.bodyRadius * Math.sin(Math.PI / 2 - Math.PI * 2 / 5), this.bodyRadius * Math.cos(Math.PI / 2 - Math.PI * 2 / 5));
        this.scene.rotate(- this.wingAlfa, 1, 0, 0);
        this.wing.displayRight();

        this.scene.popMatrix();
    }
}
    