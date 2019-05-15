class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 4);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.6, 0.5, 0.4, 1.0);
        this.material.setDiffuse(0.6, 0.5, 0.4, 1.0);
        this.material.setSpecular(0.3, 0.25, 0.2, 1.0);
        this.material.setShininess(10.0);   
    }
    display() {
        this.material.apply();
        this.cylinder.display();
    }
}