/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.wingsAngle = 0;
        this.previousYDiff = 0;
        this.orientation = 0;
        this.speed = 0;
        this.position = [0, 3, 0];
        this.scaleFactor = 1;
        this.speedFactor = 1;

        this.branch = null;

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
        this.cylinder = new MyCylinder(this.scene, 5, 0.1, 0.1);
        this.legCylinder = new MyCylinder(this.scene,5,0.5,0.1);
    }

    setBranch(branch) {
        this.branch = branch;
    }

    updatePosition(t) {
        this.wingsAngle = Math.PI * 50 * (1 + Math.sin(Math.PI * t * this.speedFactor / 500)) / 2 / 180;//alterna entre 0 e 30 graus e converte para radianos, 1 segundo para um ciclo completo
        this.position =
            [this.position[0] + this.speed * this.speedFactor * Math.sin(this.orientation),
            this.position[1] + ((Math.sin(Math.PI * t * this.speedFactor / 500)) / 2) - this.previousYDiff,
            this.position[2] + this.speed * this.speedFactor * Math.cos(this.orientation)];
        this.previousYDiff = ((Math.sin(Math.PI * t * this.speedFactor / 500)) / 2);

    }

    turn(v) {
        this.orientation = this.orientation + this.speedFactor * (v * Math.PI * 10 / 180);
    }

    accelerate(v) {
        this.speed = this.speed + 0.1 * v;
        if (this.speed > 2) this.speed = 2;
    }

    setScaleFactor(scale) {
        this.scaleFactor = scale;
    }

    setSpeedFactor(speedFactor) {
        this.speedFactor = speedFactor;
    }

    reset() {
        this.position = [0, 3 + this.previousYDiff, 0];
        this.orientation = 0;
        this.speed = 0;
    }

    display() {
        /*this.scene.pushMatrix();
        this.scene.translate(0, 1.5, 0);
        this.scene.scale(3, 3, 3);
        //this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quad.display();//test size
        this.scene.popMatrix();*/

        this.scene.pushMatrix();
        this.scene.translate(...this.position);//move bird
        this.scene.rotate(this.orientation, 0, 1, 0);//rotate bird
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);//scale bird
        this.scene.scale(0.6, 0.65, 0.6);//default scale
        this.scene.translate(0, 1, 1.3);//default position

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
        this.scene.translate(-0.66, -0.5, -1.25);
        this.scene.rotate(this.wingsAngle, 0, 0, 1);
        this.scene.translate(-0.18, 0.18, 0);

        this.scene.pushMatrix();
        this.scene.translate(-0.17, 0.18, -0.25);
        // this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.triangle.display();//right wing triangle
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.5, 0.5, 1);
        this.quad.display();//right wing square
        this.scene.popMatrix();

        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.66, -0.5, -1.25);
        this.scene.rotate(-this.wingsAngle, 0, 0, 1);
        this.scene.translate(0.18, 0.18, 0);

        this.scene.pushMatrix();
        this.scene.translate(0.17, 0.18, -0.25);
        this.scene.rotate(Math.PI /* * 3 / 4*/, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.triangle.display();//left wing triangle
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate((Math.PI / 4), 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.5, 0.5, 1);
        this.quad.display();//left wing square
        this.scene.popMatrix();

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

        //leg
        this.yellow.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.3,-1.5,-1.25);
        this.legCylinder.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}

