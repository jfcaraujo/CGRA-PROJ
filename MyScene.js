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
        this.initTextures();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.hill = new MyVoxelHill(this, 4);
        this.hill2 = new MyVoxelHill(this, 3);
        this.treeGroup = new MyTreeGroupPatch(this, this.trunkText, this.leavesText);
        this.treeRow = new MyTreeRowPatch(this, this.trunkText, this.leavesText);
        this.cubeMap = new MyCubeMap(this);
        this.house = new MyHouse(this);
        this.quad=new MyQuad(this);

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.useTextures = true;
        this.timeOfDay = 0;
        this.timeIds = {'Day': 0, 'Night': 1};

    }

    initTextures() {
        this.trunkText = new CGFappearance(this);
        this.trunkText.setAmbient(1, 1, 1, 1.0);
        this.trunkText.setDiffuse(1, 1, 1, 1.0);
        this.trunkText.setSpecular(1, 1, 1, 1.0);
        this.trunkText.setShininess(10.0);
        this.trunkText.loadTexture('textures/trunk_texture.jpg');
        this.trunkText.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.leavesText = new CGFappearance(this);
        this.leavesText.setAmbient(1, 1, 1, 1.0);
        this.leavesText.setDiffuse(1, 1, 1, 1.0);
        this.leavesText.setSpecular(1, 1, 1, 1.0);
        this.leavesText.setShininess(10.0);
        this.leavesText.loadTexture('textures/leaves_texture.png');
        this.leavesText.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(12, 2, 12), vec3.fromValues(0, 5, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    updateTimeOfDay() {
        if (this.timeOfDay == 0) this.cubeMap.dayMode();
        else if (this.timeOfDay == 1) this.cubeMap.nightMode();
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.enableTextures(this.useTextures);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis) this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //base
        this.pushMatrix();
        this.scale(30,1,30);
        this.rotate(-Math.PI/2,1,0,0);
        this.quad.display();
        this.popMatrix();

        //house
<<<<<<< HEAD
        this.treeRow.display();
=======
        this.pushMatrix();
        this.translate(0,0.01,0);
        this.house.display();
        this.popMatrix();

>>>>>>> 352b5cd73b10e0c6d6a796a29176b4655bc72aa9
        //hills
        this.pushMatrix();
        this.translate(12,0.01,10);
        this.hill2.display();
        this.translate(-22,0.01,-19);
        this.hill.display();
        this.popMatrix();

        //cubemap
        this.cubeMap.display();

        // ---- END Primitive drawing section
    }
}