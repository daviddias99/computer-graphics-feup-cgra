/**
 * MyAnimatedLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyAnimatedLSystem extends CGFobject {
	constructor(scene,timeFactor) {
        super(scene);
        this.timeFactor = timeFactor;
        this.init();
    }

    init(){
        // cria o lexico da gramática
        this.initGrammar()
        this.animationOngoing = false;
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyRectangle(this.scene, 0.2, 1),
            "X": new MyRectangle(this.scene, 0.5, 0.5)
        };
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

    // gera o sistema L com os par�metros atuais da cena
    generate(_axiom, _productions, _angle, _iterations, _scale){
        // copia o axioma da cena para iniciar a sequência de desenvolvimento
        this.axiom = _axiom;

        // cria as producoes
        this.productions=_productions;

        // angulo de rotacao
        this.angle = _angle * Math.PI / 180.0;

        // numero de iteracoes
        this.iterations = _iterations;

        // escalamento dos elementos dependente do numero de iteracoes
        this.scale = Math.pow(_scale, this.iterations-1);

        // desenvolve a sequencia de desenvolvimento do Sistema L

        this.iterate();
        this.segmentCount = this.countSegments();
     }

  
    // desenvolve o axioma ao longo de uma sequência de desenvolvimento com um determinado número de iterações
    iterate(){
        var i, j;
        for (i=0; i < this.iterations; ++i){
            var newString = "";

            // substitui cada um dos caracteres da cadeia de caracteres de acordo com as produções
            for (j=0; j<this.axiom.length; ++j){

                var axiomProductions=this.productions[this.axiom[j]];
                // aplicar producoes
                if (axiomProductions === undefined){
                    // caso nao se aplique nenhuma producao deixa estar o caracter original
                    newString += this.axiom[j];
                }else if (axiomProductions.length == 1) {
                    // caso apenas exista uma producao, aplica-a
                    newString += axiomProductions[0];
                } else {
                    // sistema estocastico - varias producoes sao aplicaveis - seleciona aleatoriamente
                    newString += axiomProductions[Math.floor(Math.random() * axiomProductions.length)];                    
                }
            }

            this.axiom = newString;
        }
    }

    display() {

        if (!this.animationOngoing)
            return;

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.scale(this.scale, this.scale, this.scale);

        var i, shownSegments = 0;

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

    startAnimation(t) {

        this.animationStartTime = t;
        this.depth = 0;
        this.animationOngoing = true;
    }

    update(t) {

        if (this.animationOngoing) {
            this.depth = (t - this.animationStartTime) / this.timeFactor * this.axiom.length;
        }
    }
    
}