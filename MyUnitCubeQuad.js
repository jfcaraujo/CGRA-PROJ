/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.initMaterials(scene);
    }

    //Initialize scene objects
    initMaterials(scene) {
        //quad material side
        this.quadSide = new CGFappearance(scene);
        this.quadSide.setAmbient(1, 1, 1, 1.0);
        this.quadSide.setDiffuse(1, 1, 1, 1.0);
        this.quadSide.setSpecular(1, 1, 1, 1.0);
        this.quadSide.setShininess(10.0);
        this.quadSide.loadTexture('images/mineSide.png');
        this.quadSide.setTextureWrap('REPEAT', 'REPEAT');

        //quad material top
        this.quadTop = new CGFappearance(scene);
        this.quadTop.setAmbient(1, 1, 1, 1.0);
        this.quadTop.setDiffuse(1, 1, 1, 1.0);
        this.quadTop.setSpecular(1, 1, 1, 1.0);
        this.quadTop.setShininess(10.0);
        this.quadTop.loadTexture('images/mineTop.png');
        this.quadTop.setTextureWrap('REPEAT', 'REPEAT');

        //quad material bottom
        this.quadBottom = new CGFappearance(scene);
        this.quadBottom.setAmbient(1, 1, 1, 1.0);
        this.quadBottom.setDiffuse(1, 1, 1, 1.0);
        this.quadBottom.setSpecular(1, 1, 1, 1.0);
        this.quadBottom.setShininess(10.0);
        this.quadBottom.loadTexture('images/mineBottom.png');
        this.quadBottom.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {
        // ---- BEGIN Primitive drawing section
        //sides
        this.quadSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();

        //top
        this.quadTop.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.quad.display();
        this.scene.popMatrix();

        //bottom
        this.quadBottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.quad.display();
        this.scene.popMatrix();

    }
}