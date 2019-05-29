/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.initValues();
        this.initGrammar();

    }

    initValues() {

        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.productions = {
            "F": ["FF","FFF","F"],
            "X": ["F[-X][X]F[-X]+FX","-F[-X][-X]F[+X]+FX", "F[+X][X]-F[-X]F+X"]
        };
        this.scaleFactor = 0.5;
        this.animationOngoing = false;
    }

    initGrammar() {
        this.grammar = {
            "F": new MyLightningSegment(this.scene, 0.1, 2),
            "X": new MyLightningSegment(this.scene, 0.1, 1.5)
        };
    }

    doGenerate() {

        super.generate(this.axiom, this.productions, this.angle, this.iterations, this.scaleFactor);
        this.segmentCount = this.countSegments();
    }

    startAnimation(t) {

        this.animationStartTime = t;
        this.depth = 0;
        this.animationOngoing = true;
    }


    countSegments() {

        var i, result = 0;

        // percorre a cadeia de caracteres
        for (i = 0; i < this.axiom.length; ++i) {

            var primitive = this.grammar[this.axiom[i]];

            if (primitive) {
                result++;
            }
            
        }
    
        return result;
    }

display() {

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI,0,0,1);
    this.scene.scale(this.scale, this.scale, this.scale);

    var i, shownSegments = 0;

    if (!this.animationOngoing){

        this.scene.popMatrix();
        return;
    }


    // percorre a cadeia de caracteres
    for (i = 0; i < this.axiom.length; ++i) {

        // verifica se sao caracteres especiais
        switch (this.axiom[i]) {
            case "+":
                // roda a esquerda
                this.scene.rotate(this.angle, 0, 0, 1);
                break;

            case "-":
                // roda a direita
                this.scene.rotate(-this.angle, 0, 0, 1);
                break;

            case "\\":
                // roda sentido pos segundo X
                this.scene.rotate(this.angle, 1, 0, 0);
                break;

            case "/":
                // roda sentido neg segundo X
                this.scene.rotate(-this.angle, 1, 0, 0);
                break;

            case "^":
                // roda sentido pos segundo Y
                this.scene.rotate(this.angle, 0, 1, 0);
                break;

            case "&":
                // roda sentido neg segundo Y
                this.scene.rotate(-this.angle, 0, 1, 0);
                break;

            case "[":
                // push
                this.scene.pushMatrix();
                break;

            case "]":
                // pop
                this.scene.popMatrix();
                break;

            // processa primitiva definida na gramatica, se existir
            default:
                var primitive = this.grammar[this.axiom[i]];
                if (shownSegments < this.depth) {

                    if (primitive) {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }

                    shownSegments++;
                }

                break;
        }
    }

    if (shownSegments >= this.segmentCount)
        this.animationOngoing = false;
    this.scene.popMatrix();
}

update(t) {

    let timeFactor = 1600;

    if (this.animationOngoing) {
        this.depth = (t - this.animationStartTime) / timeFactor * this.axiom.length;
    }
}

}