/**
 * MyFireplace
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFireplace extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
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

        this.cone = new MyCone(this.scene,15,1,1);
    }

    display() {
        this.scene.pushMatrix();
        this.text.apply();
        this.cone.display();
        this.scene.popMatrix();
    }
}