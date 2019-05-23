/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.init();
    }
    init() {
        //create materials
        this.marbleMaterial = new CGFappearance(this.scene);
        this.marbleMaterial.setAmbient(0.5, 0.5, 0.5, 1);
        this.marbleMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
        this.marbleMaterial.setSpecular(1, 1, 1, 1);
        this.marbleMaterial.setShininess(10.0);
        this.marbleMaterial.loadTexture('textures/Marble.jpg');
        this.marbleMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.blueTiledRoofMaterial = new CGFappearance(this.scene);
        this.blueTiledRoofMaterial.setAmbient(0.5, 0.5, 0.5, 1);
        this.blueTiledRoofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.blueTiledRoofMaterial.setSpecular(0, 0, 0, 1);
        this.blueTiledRoofMaterial.setShininess(10.0);
        this.blueTiledRoofMaterial.loadTexture('textures/BlueTileRoof.jpg');
        this.blueTiledRoofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //create objects
        this.cube = new MyUnitCube(this.scene);
        this.prism = new MyPrism(this.scene, 7, 3, 0.5);
        this.pyramid = new MyPyramid(this.scene, 4);
        this.cylinder = new MyCylinder(this.scene, 5, 0.1, 0.4);
    }

    display() {

        this.scene.pushMatrix();
        this.cube.display();
        this.scene.translate(0,1,0);
        this.cylinder.display();
        this.scene.popMatrix();
    }
}

