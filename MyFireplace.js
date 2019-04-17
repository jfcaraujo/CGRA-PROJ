/**
 * MyFireplace
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFireplace extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.on = false;
        this.init();
    }
    init() {
        //create material
        this.text = new CGFappearance(this.scene);
        this.text.setAmbient(0.5, 0.5, 0, 1.0);
        this.text.setDiffuse(1, 1, 0, 1.0);
        this.text.setSpecular(0, 0, 0, 1.0);
        this.text.setShininess(10.0);
        this.text.loadTexture('textures/fire2.jpg');
        this.text.setTextureWrap('REPEAT', 'REPEAT');

        this.text2 = new CGFappearance(this.scene);
        this.text2.setAmbient(1, 1, 0, 1.0);
        this.text2.setDiffuse(1, 1, 0, 1.0);
        this.text2.setSpecular(0, 0, 0, 1.0);
        this.text2.setShininess(10.0);
        this.text2.loadTexture('textures/fire2.jpg');
        this.text2.setTextureWrap('REPEAT', 'REPEAT');

        this.cone = new MyCone(this.scene,15,1,1);
    }

    turnOn() {
        this.on = true;
    }

    turnOf() {
        this.on = false;
    }

    display() {
        if (this.on) {
            this.text2.apply();
        }
        else {
            this.text.apply();
        }

        this.scene.pushMatrix();
        this.cone.display();
        this.scene.popMatrix();
    }
}