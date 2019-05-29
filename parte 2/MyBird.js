/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.orientation = 0;
        this.speed = 0;
        this.position = [0, 3, 0];
        this.init();
    }
    init() {
        //create materials
        this.black = new CGFappearance(this.scene);
        this.black.setAmbient(0, 0, 0, 1);
        this.black.setDiffuse(0, 0, 0, 1);
        this.black.setSpecular(0, 0, 0, 1);
        this.black.setShininess(10.0);

        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(1, 1, 0, 1);
        this.yellow.setDiffuse(1, 1, 0, 1);
        this.yellow.setSpecular(1, 1, 0, 1);
        this.yellow.setShininess(10.0);

        //create objects
        this.sphere = new MySphere(this.scene, 0.7, 6, 5);
        this.quad = new MyQuad(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.pyramid = new MyPyramid(this.scene, 4);
        this.cylinder = new MyCylinder(this.scene, 5, 0.1, 0.15);
    }

    setPosition(position){
        this.position=position;
    }

    display() {
        /*this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quad.display();//test size
        this.scene.popMatrix();*/

        this.scene.pushMatrix();
        this.scene.scale(0.6, 0.65, 0.6);
        this.scene.translate(0, 4, 1.3);

        this.scene.pushMatrix();
        this.sphere.display();//head
        this.scene.scale(1, 1, 1.3);
        this.scene.translate(0, -0.5, -1);
        this.sphere.display();//body
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -2.1);
        this.scene.rotate(Math.PI * 3 / 4, 0, 1, 0);
        this.triangle.display();//tail
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.8, -0.4, -1.25);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.5, 0.5, 1);
        this.quad.display();//right wing square
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.97, -0.22, -1.5);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.triangle.display();//right wing triangle
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.8, -0.4, -1.25);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.5, 0.5, 1);
        this.quad.display();//left wing square
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.97, -0.22, -1.5);
        this.scene.rotate(Math.PI * 3 / 4, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.triangle.display();//left wing triangle
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.black.apply();
        this.scene.translate(-0.5, 0.25, 0.15);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cylinder.display();//right eye
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.black.apply();
        this.scene.translate(0.5, 0.25, 0.15);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.cylinder.display();//left eye
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.yellow.apply();
        this.scene.translate(0, 0, 0.6);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.25, 0.25, 0.25);
        this.pyramid.display();//beak
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}

