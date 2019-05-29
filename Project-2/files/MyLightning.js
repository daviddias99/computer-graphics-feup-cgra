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

    initValues(){

        this.axiom = "X";
        this.angle = 25.0; 
        this.iterations = 6; 
        this.productions = {"F": [ "FF" ],
                            "X": [ "F[-X][X]F[-X]+FX",
                            //   "F[-X][x]+X", "F[+X]-X"     
                            // "​F[/X][X]F[\\X]+X", 
                            // "F[\\X][X]/X", 
                            // "F[/X]\\X", 
                            // "F[^X][X]F[&X]^X", 
                            // "F[^X]&X", 
                            // "F[&X]^X" ]};
    ]};
        this.scaleFactor = 0.5;

    }

    initGrammar() {
        this.grammar = {
            "F": new MyLightningSegment(this.scene,0.1,2),
            "X": new MyLightningSegment(this.scene,0.1,1.5)
        };
    }

    doGenerate() {

        super.generate(this.axiom,this.productions,this.angle,this.iterations,this.scaleFactor);
    }

    startAnimation(t) {

        this.animationStartTime = t;
        this.depth = 0;    
    }


    display() {

        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length && i < this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
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
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }

    update(t) {
        
        let timeFactor = 3;
        this.depth = (t-this.animationStartTime)/timeFactor * this.axiom.length;
    }

}