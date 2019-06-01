class MyLightningSegment extends CGFobject {
    constructor(scene, xScale, yScale) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.xScale = xScale;
        this.yScale = yScale;

        this.initMaterials();
    }

    initMaterials() {

        this.lightningMaterial = new CGFappearance(this.scene);
        this.lightningMaterial.setEmission(1, 1, 1, 1);
        this.lightningMaterial.loadTexture('images/blue.jpeg');
        this.lightningMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {


        this.scene.pushMatrix();

        this.lightningMaterial.apply();

        this.scene.translate(0.0, this.yScale * 0.5, 0);
        this.scene.scale(this.xScale, this.yScale, 1);
       
        this.quad.display();
        this.scene.popMatrix();
    }
}