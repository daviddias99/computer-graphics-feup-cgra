/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
    constructor(scene, x, y, z) {
        super(scene);

        this.initValues();
        this.initGrammar();
        this.doGenerate();
        this.x = x;
        this.y = y;
        this.z = z;
    }

    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }

    initValues() {

        this.axiom = "X";
        this.angle = 35.0; 
        this.iterations = 4 ; 
        this.productions = {
            "F": [ "FF" ],
            "X": [ "F[-X][X]F[-X]+X" , "F[-X][x]+X", "F[+X]-X", "​F[/X][X]F[\\X]+X", "F[\\X][X]/X", "F[/X]\\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
        };
        this.scaleFactor = 0.5;
    }


    doGenerate() {

        this.initValues();
        super.generate(this.axiom, this.productions, this.angle, this.iterations, this.scaleFactor);

    }

    display() {

        this.scene.pushMatrix();

        this.scene.translate(this.x,this.y,this.z);

        super.display();

        this.scene.popMatrix();
    }

}