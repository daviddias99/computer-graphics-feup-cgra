class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 4);


        this.initMaterials();
    }

    initMaterials() {

        let factorTT = 0.8;
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.woodMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(5.0);  
        this.woodMaterial.loadTexture('images/bark.jpg');
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');


    }

    display() {
        this.woodMaterial.apply();
        this.cylinder.display();
    }

    
}