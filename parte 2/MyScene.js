/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.initBranches();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.terrain = new MyTerrain(this, 32);
        this.bird = new MyBird(this);
        this.nest = new MyNest(this,2,5,5);
        this.lightning = new MyLightning(this);
        this.plants = [];
        this.plantCoords = [];

        for (var i = 0; i < 15; i++) {
            this.plants.push(new MyLPlant(this));
        }

        for (var i = 0; i < 16; i++) {
            this.plantCoords.push(Math.random() * 40 - 20);
        }

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayPlane = false;
        this.displayBird = true;
        this.speedFactor = 1;
        this.scaleFactor = 1;

        this.lightningAnimation = false;
        this.lightningAnimationJustStarted = false;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    getRandomPos() {
        return Math.random() * 21 - 10;
    }
    getRandomRot() {
        return Math.random() * 2 * Math.PI;
    }
    initBranches() {
        this.branches = [
            new MyTreeBranch(this, this.getRandomPos(), this.getRandomPos(), 2, this.getRandomRot()),
            new MyTreeBranch(this, this.getRandomPos(), this.getRandomPos(), 2, this.getRandomRot()),
            new MyTreeBranch(this, this.getRandomPos(), this.getRandomPos(), 2, this.getRandomRot()),
            new MyTreeBranch(this, this.getRandomPos(), this.getRandomPos(), 2, this.getRandomRot())
        ];
    }
    displayBranches() {
        for (var i = 0; i < 4; i++) {
            this.branches[i].display();
        }
    }
    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
            this.bird.accelerate(1);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            keysPressed = true;
            this.bird.turn(1);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
            this.bird.accelerate(-1);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            keysPressed = true;
            this.bird.turn(-1);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            keysPressed = true;
            this.bird.reset();
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            keysPressed = true;
            this.bird.descend();
        }
        if (this.gui.isKeyPressed("KeyL")) {
            this.lightningAnimationJustStarted = true;
        }
        if (keysPressed)
            console.log(text+this.bird.position[1]+"hhf"+this.bird.descendPart);
    }

    update(t) {
        this.checkKeys();
        this.bird.updatePosition(t);
        if (t >= this.startTime + 1000) {
            this.lightningAnimation = false;
        }
        if (this.lightningAnimationJustStarted) {
            this.lightningAnimation = true;
            this.lightningAnimationJustStarted = false;
            this.startTime = t;
            this.lightning.startAnimation(t);
        }
        if (this.lightningAnimation) {
            this.lightning.update(t);
        }
    }

    displayPlants() {
        for (var i = 0; i < 15; i++) {
            this.pushMatrix();
            this.translate(this.plantCoords[i],2,this.plantCoords[i+1]);
            this.plants[i].display();
            this.popMatrix();
        }
    }

    setSpeedFactor() {
        this.bird.setSpeedFactor(this.speedFactor);
    }

    setScaleFactor() {
        this.bird.setScaleFactor(this.scaleFactor);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        if (this.displayBird) {
            this.bird.display();
        }

        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(120, 120, 1);
        if (this.displayPlane)
            this.terrain.display();
        this.popMatrix();

        this.displayBranches();

        this.nest.display();

        if (this.lightningAnimation) {
            this.pushMatrix();
            this.translate(0,10,0);
            this.rotate(Math.PI,0,0,1);
            this.lightning.display();
            this.popMatrix();
        }

        this.displayPlants();
        
        // ---- END Primitive drawing section
    }
}