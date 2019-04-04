/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene, trunkTexture, treeTopTexture) {
        super(scene);
        this.tree = new MyTree(scene, 1, 0.5, 4, 2, trunkTexture, treeTopTexture);
        this.numb1 = 4 + 2 * Math.random();
        this.numb2 = 4 + 2 * Math.random();
        this.numb3 = 4 + 2 * Math.random();

    }


    display() {
        // ---- BEGIN Primitive drawing section
        this.scene.pushMatrix();
        this.tree.display();
        this.scene.translate(0, 0, this.numb1);
        this.scene.scale(0.8, 0.8, 0.8);
        this.tree.display();
        this.scene.translate(0, 0, this.numb2);
        this.scene.scale(1.2, 1.2, 1.2);
        this.tree.display();
        this.scene.translate(this.numb3, 0, 0);
        this.scene.scale(1.2, 1.2, 1.2);
        this.tree.display();
        this.scene.translate(0, 0, -this.numb1);
        this.scene.scale(0.8, 0.8, 0.8);
        this.tree.display();
        this.scene.translate(0, 0, -this.numb2);
        this.scene.scale(1.2, 1.2, 1.2);
        this.tree.display();
        this.scene.translate(this.numb3, 0, 0);
        this.scene.scale(0.8, 0.8, 0.8);
        this.tree.display();
        this.scene.translate(0, 0, this.numb1);
        this.scene.scale(0.8, 0.8, 0.8);
        this.tree.display();
        this.scene.translate(0, 0, this.numb2);
        this.scene.scale(1.2, 1.2, 1.2);
        this.tree.display();
        this.scene.popMatrix();
    }
}