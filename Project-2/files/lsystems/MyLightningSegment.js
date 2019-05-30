class MyLightningSegment extends CGFobject {
    constructor(scene, xScale, yScale) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.xScale = xScale;
        this.yScale = yScale;

        this.initMaterials();
    }

    initMaterials() {


        let factorT = 1;
        this.lightningMaterial = new CGFappearance(this.scene);
        this.lightningMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.lightningMaterial.setDiffuse(factorT, factorT, factorT, 1.0);
        this.lightningMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.lightningMaterial.setShininess(10.0);
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