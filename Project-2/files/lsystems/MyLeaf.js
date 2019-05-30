class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.leafTop = new MyRegPolygon(this.scene,6,1);
        this.leafBottom = new MyRegPolygon(this.scene,6,-1);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0, 0.5, 0.1, 1.0);
        this.material.setDiffuse(0, 0.5, 0.1, 1.0);
        this.material.setSpecular(0, 0.05, 0.05, 1,0);
        this.material.setShininess(10.0);   
    }
    display() {
        this.material.apply();

        this.scene.pushMatrix();
        this.scene.scale(1.5,1,1);

        this.leafTop.display();
        this.leafBottom.display();

        this.scene.popMatrix();
    }
}