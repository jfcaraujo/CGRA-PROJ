/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene,trunkTexture,treeTopTexture) {
        super(scene);
        this.tree=new MyTree(scene,1,0.5,4,2,trunkTexture,treeTopTexture);
    }
    display() {
        // ---- BEGIN Primitive drawing section
        this.scene.pushMatrix();
        this.tree.display();
        this.scene.translate(0,0,4.5);
        this.tree.display();
        this.scene.translate(0,0,5);
        this.tree.display();
        this.scene.translate(5,0,0);
        this.tree.display();
        this.scene.translate(0,0,-4.5);
        this.tree.display();
        this.scene.translate(0,0,-5);
        this.tree.display();
        this.scene.translate(5.5,0,0);
        this.tree.display();
        this.scene.translate(0,0,4.5);
        this.tree.display();
        this.scene.translate(0,0,5.5);
        this.tree.display();
        this.scene.popMatrix();
    }
}