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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this,7);
        this.hill = new MyVoxelHill(this,5);
        this.cylinder=new MyCylinder(this,20,2,0.5);
        this.tree=new MyTree(this,1,0.5,4,2,this.text1,this.text2);
        this.treePatch=new MyTreeGroupPatch(this,this.text1,this.text2);

        //Objects connected to MyInterface
        
    }
    initTextures(){
        this.text1 = new CGFappearance(this);
        this.text1.setAmbient(1, 0, 1, 1.0);
        this.text1.setDiffuse(1, 0, 1, 1.0);
        this.text1.setSpecular(1, 0, 1, 1.0);
        this.text1.setShininess(10.0);

        this.text2 = new CGFappearance(this);
        this.text2.setAmbient(0, 1, 1, 1.0);
        this.text2.setDiffuse(0, 1, 1, 1.0);
        this.text2.setSpecular(0, 1, 1, 1.0);
        this.text2.setShininess(10.0);

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //Uncomment what you want to test
         //this.prism.display();
        //this.cone.enableNormalViz();


         //this.cylinder.display();
        // this.cylinder.enableNormalViz();

         //this.hill.display();
        this.treePatch.display();

        // ---- END Primitive drawing section
    }
}