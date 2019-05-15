/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui

        this.gui = new dat.GUI();
        this.gui.add(this.scene, 'showTextures').name("Enable textures");
        this.gui.add(this.scene, 'timeOfDay', this.scene.dayNightSelector).name('Time').onChange(this.scene.switchTimeOfDay.bind(this.scene));
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        var obj = this;

        return true;
    }
}