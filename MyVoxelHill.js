/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene,levels) {
        super(scene);
        this.scene = scene;
        this.levels = levels;
		this.init();
	}
	init() {
		//create objects
		this.cube = new MyUnitCubeQuad(this.scene);
	}
	
	display() {
        var side = 1;

        this.scene.pushMatrix();
        this.scene.translate(-1,-0.5,-1);

        for (var l = 0; l < this.levels; l++) {
            for (var i = 0; i < side; i++) {
                for (var j = 0; j < side; j++) {
                    this.scene.pushMatrix();
                    this.scene.translate(i - (side - 1)/2 + 1 ,this.levels - l,j - (side-1)/2 + 1);
                    this.cube.display();
                    this.scene.popMatrix();
                }
            }
            side += 2;
        }

        this.scene.popMatrix();
    }
}

