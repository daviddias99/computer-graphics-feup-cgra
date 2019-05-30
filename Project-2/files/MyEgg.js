/**
 * MyEgg
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyEgg extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
    }
    initBuffers() {

        this.egg = new MySphere(this.scene, 20);
    }


    initMaterials() {

        // egg material
        this.eggMaterial = new CGFappearance(this.scene);

        // wood

        let factorTT = 0.8;
        this.eggMaterial = new CGFappearance(this.scene);
        this.eggMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.eggMaterial.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.eggMaterial.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.eggMaterial.setShininess(5.0);
        this.eggMaterial.loadTexture('images/egg.jpeg');
        this.eggMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }


    display() {

        this.scene.pushMatrix();

        this.scene.scale(1, 1.5, 1);
        this.scene.translate(0, 0.35, 0);

        this.eggMaterial.apply();
        this.egg.display();

        this.scene.popMatrix();
    }
}