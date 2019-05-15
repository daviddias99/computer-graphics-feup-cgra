class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangle = new MyTriangleBig(this.scene);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0, 0.5, 0.1, 1.0);
        this.material.setDiffuse(0, 0.5, 0.1, 1.0);
        this.material.setSpecular(0, 0.25, 0.05, 1.0);
        this.material.setShininess(10.0);   
    }
    display() {
        this.material.apply();
        this.triangle.display();
    }
}