/**
 * MyLamp
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLamp extends CGFobject {

    constructor(scene, postHeight, postRadius, headHeight, headRadius, postTexture, headTexture) {
        super(scene);

        this.postRadius = postRadius;
        this.postHeight = postHeight;

        this.headRadius = headRadius;
        this.headHeigth = headHeight;

        this.postTexture = postTexture;
        this.headTexture = headTexture;

        this.initMaterials();
        this.initBuffers();
    }
    initBuffers() {

        this.post = new MyCylinder(this.scene, 10);
        this.headBase = new MyPrismWBottoms(this.scene, null,10, 1, this.sideMaterial, this.topMaterial);
        this.headColumn = this.headBase;
        this.headRoof = new MyPyramidWBottoms(this.scene, 10,null, this.sideMaterial, this.topMaterial);
        // this.quad = new MyQuad(this.scene);

    }

    initMaterials() {

        // top material

        let factorTT = 0.8;
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.topMaterial.setDiffuse(factorTT, factorTT, factorTT, 1.0);
        this.topMaterial.setSpecular(factorTT, factorTT, factorTT, 1.0);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture(this.postTexture);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //side material
        let factorTT = 0.8;
        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.sideMaterial.setDiffuse(factorTT, factorTT, factorTT, 1.0);
        this.sideMaterial.setSpecular(factorTT, factorTT, factorTT, 1.0);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture(this.postTexture);
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {
        this.scene.pushMatrix();

        // post
        this.scene.scale(this.postRadius, this.postHeight, this.postRadius);

        this.topMaterial.apply();
        this.post.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // bottom headBase
        this.scene.translate(0, this.postHeight, 0);
        this.scene.scale(this.headRadius, this.headHeigth / 8, this.headRadius);
        this.headBase.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // // bottom plane upfacing
        // this.scene.translate(0, this.postHeight + this.headHeigth / 8, 0);
        // this.scene.scale(2 * this.headRadius, 2 * this.headRadius, 2 * this.headRadius);
        // this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        // this.quad.display();

        // this.scene.popMatrix();
        // this.scene.pushMatrix();

        // // bottom plane downfacing
        // this.scene.translate(0, this.postHeight + this.headHeigth / 8, 0);
        // this.scene.scale(2 * this.headRadius, 2 * this.headRadius, 2 * this.headRadius);
        // this.scene.rotate(Math.PI / 2, 1, 0, 0);
        // this.quad.display();

        // this.scene.popMatrix();
        // this.scene.pushMatrix();

        // // top plane upfacing
        // this.scene.translate(0, this.postHeight + this.headHeigth, 0);
        // this.scene.scale(2 * this.headRadius, 2 * this.headRadius, 2 * this.headRadius);
        // this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        // this.quad.display();

        // this.scene.popMatrix();
        // this.scene.pushMatrix();

        // // top plane downfacing
        // this.scene.translate(0, this.postHeight + this.headHeigth, 0);
        // this.scene.scale(2 * this.headRadius, 2 * this.headRadius, 2 * this.headRadius);
        // this.scene.rotate(Math.PI / 2, 1, 0, 0);
        // this.quad.display();

        // this.scene.popMatrix();
        // this.scene.pushMatrix();

        // // top headBase
        // this.scene.translate(0, this.postHeight + this.headHeigth, 0);
        // this.scene.scale(this.headRadius, this.headHeigth, this.headRadius);
        // this.headRoof.display();

        // this.scene.popMatrix();
        // this.scene.pushMatrix();

        // headColumn 1
        this.scene.translate(this.headRadius * 3 / 5, this.postHeight + this.headHeigth / 8, this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius / 7, this.headHeigth - this.headHeigth / 8, this.headRadius / 7);
        this.headColumn.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // headColumn 2
        this.scene.translate(this.headRadius * 3 / 5, this.postHeight + this.headHeigth / 8, -this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius / 7, this.headHeigth - this.headHeigth / 8, this.headRadius / 7);
        this.headColumn.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // headColumn 3
        this.scene.translate(-this.headRadius * 3 / 5, this.postHeight + this.headHeigth / 8, this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius / 7, this.headHeigth - this.headHeigth / 8, this.headRadius / 7);
        this.headColumn.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // headColumn 4
        this.scene.translate(-this.headRadius * 3 / 5, this.postHeight + this.headHeigth / 8, -this.headRadius * 3 / 5);
        this.scene.scale(this.headRadius / 7, this.headHeigth - this.headHeigth / 8, this.headRadius / 7);
        this.headColumn.display();


    }

}