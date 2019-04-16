/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init();
    }

    init() {
        //create objects
        this.quad = new MyQuad(this.scene);
        this.day = true;
        this.initTextures();
    }

    initTextures() {
        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(1, 1, 1, 1.0);
        this.top.setDiffuse(1, 1, 1, 1.0);
        this.top.setSpecular(1, 1, 1, 1.0);
        this.top.setShininess(10.0);
        this.top.loadTexture('Images/powderpeak_up.png');
        this.top.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.bottom = new CGFappearance(this.scene);
        this.bottom.setAmbient(1, 1, 1, 1.0);
        this.bottom.setDiffuse(1, 1, 1, 1.0);
        this.bottom.setSpecular(1, 1, 1, 1.0);
        this.bottom.setShininess(10.0);
        this.bottom.loadTexture('Images/powderpeak_dn.png');
        this.bottom.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.front = new CGFappearance(this.scene);
        this.front.setAmbient(1, 1, 1, 1.0);
        this.front.setDiffuse(1, 1, 1, 1.0);
        this.front.setSpecular(1, 1, 1, 1.0);
        this.front.setShininess(10.0);
        this.front.loadTexture('Images/powderpeak_ft.png');
        this.front.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.back = new CGFappearance(this.scene);
        this.back.setAmbient(1, 1, 1, 1.0);
        this.back.setDiffuse(1, 1, 1, 1.0);
        this.back.setSpecular(1, 1, 1, 1.0);
        this.back.setShininess(10.0);
        this.back.loadTexture('Images/powderpeak_bk.png');
        this.back.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.left = new CGFappearance(this.scene);
        this.left.setAmbient(1, 1, 1, 1.0);
        this.left.setDiffuse(1, 1, 1, 1.0);
        this.left.setSpecular(1, 1, 1, 1.0);
        this.left.setShininess(10.0);
        this.left.loadTexture('Images/powderpeak_lf.png');
        this.left.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.right = new CGFappearance(this.scene);
        this.right.setAmbient(1, 1, 1, 1.0);
        this.right.setDiffuse(1, 1, 1, 1.0);
        this.right.setSpecular(1, 1, 1, 1.0);
        this.right.setShininess(10.0);
        this.right.loadTexture('Images/powderpeak_rt.png');
        this.right.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(30, 30, 30);
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_CUBE_MAP, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        //back
        this.back.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.quad.display();
        this.scene.popMatrix();
        //front
        this.front.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
        //right
        this.right.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
        //left
        this.left.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
        //top
        this.top.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
        //bottom
        this.bottom.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

    }

    dayMode() {
        if (!this.day) {
            this.day = true;
            this.top.loadTexture('Images/powderpeak_up.png');
            this.bottom.loadTexture('Images/powderpeak_dn.png');
            this.front.loadTexture('Images/powderpeak_ft.png');
            this.back.loadTexture('Images/powderpeak_bk.png');
            this.left.loadTexture('Images/powderpeak_lf.png');
            this.right.loadTexture('Images/powderpeak_rt.png');
        }

    }

    nightMode() {
        if (this.day) {
            this.day = false;
            this.top.loadTexture('Images/snowy_up.png');
            this.bottom.loadTexture('Images/snowy_dn.png');
            this.front.loadTexture('Images/snowy_ft.png');
            this.back.loadTexture('Images/snowy_bk.png');
            this.left.loadTexture('Images/snowy_lf.png');
            this.right.loadTexture('Images/snowy_rt.png');
        }
    }


}

