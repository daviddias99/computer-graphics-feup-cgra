/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyAnimatedLSystem {
    constructor(scene,timeFactor) {
        super(scene,timeFactor);
        this.initValues();
        this.initGrammar();

    }

    initValues() {

        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.productions = {
            "F": ["FF", "FFF", "F"],
            "X": ["F[-X][X]F[-X]+FX", "-F[-X][-X]F[+X]+FX", "F[+X][X]-F[-X]F+X"]
        };
        this.scaleFactor = 0.5;
    }

    initGrammar() {
        this.grammar = {
            "F": new MyLightningSegment(this.scene, 0.1, 2),
            "X": new MyLightningSegment(this.scene, 0.1, 1.5)
        };
    }

    doGenerate() {

        this.initValues();
        super.generate(this.axiom, this.productions, this.angle, this.iterations, this.scaleFactor);

    }


}