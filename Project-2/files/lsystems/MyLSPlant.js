/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.initValues();
        this.initGrammar();
        this.doGenerate();
    }

    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }

    initValues() {

        this.axiom = "X";
        this.angle = 30.0; 
        this.iterations = 5 ; 
        this.productions = {
            "F": [ "FF", "F" ],
            "X": [ "F[-X][X]F[-X]+X" , "F[-X][x]+X", "F[+X]-X", "​F[/X][X]F[\\X]+X", "F[\\X][X]/X", "F[/X]\\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
        };
        this.scaleFactor = 0.5;
    }


    doGenerate() {

        this.initValues();
        super.generate(this.axiom, this.productions, this.angle, this.iterations, this.scaleFactor);

    }
}