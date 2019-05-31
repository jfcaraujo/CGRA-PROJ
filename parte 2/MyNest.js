/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
	constructor(scene,height,coordX,coordY) {
        super(scene);
        this.scene = scene;
        this.height = height;
        this.coordX = coordX;
        this.coordY= coordY;

        this.branch = new MyTreeBranch(this.scene,0,0,0,0);
    }

    displaySingleBranchWall(ang,height) {
        this.scene.pushMatrix();
        this.scene.rotate(ang,0,1,0);
        this.scene.translate(0,height,2);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0,0,-1.5);
        this.branch.display();
        this.scene.popMatrix();
    }

    displayFloor() {
        for (var ang = 0; ang < 2*Math.PI; ang += Math.PI/16) {
            this.scene.pushMatrix();
            this.scene.rotate(ang,0,1,0);
            this.branch.display();
            this.scene.popMatrix();
        }
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.coordX,this.height,this.coordY);

        for (var ang = 0; ang < 2*Math.PI; ang += Math.PI/6) {
            for (var h = 0; h < 1; h+=0.1) {
                this.displaySingleBranchWall(ang,h);
            }
        }

        this.displayFloor();

        this.scene.popMatrix();
    }
}
