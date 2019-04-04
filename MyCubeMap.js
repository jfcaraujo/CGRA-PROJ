/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.x = 0;//1 / 385;
        this.y = 0;//1 / 511;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0.5, 0.5, 0.5,	  //0
            -0.5, 0.5, 0.5,   //1
            -0.5, -0.5, 0.5,  //2
            0.5, -0.5, 0.5,	  //3
            0.5, 0.5, -0.5,   //4
            -0.5, 0.5, -0.5,  //5
            -0.5, -0.5, -0.5, //6
            0.5, -0.5, -0.5,  //7
            -0.5, 0.5, 0.5,   //8
            -0.5, -0.5, 0.5,  //9
            -0.5, -0.5, -0.5, //10
            -0.5, 0.5, -0.5,  //11
            0.5, 0.5, 0.5,	  //12
            0.5, -0.5, 0.5,   //13
            0.5, -0.5, -0.5,  //14
            0.5, 0.5, -0.5,	  //15
            0.5, 0.5, 0.5,    //16
            -0.5, 0.5, 0.5,   //17
            -0.5, 0.5, -0.5,  //18
            0.5, 0.5, -0.5,   //19
            0.5, -0.5, 0.5,	  //20
            -0.5, -0.5, 0.5,  //21
            -0.5, -0.5, -0.5, //22
            0.5, -0.5, -0.5,  //23
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 2, 1, //frente
            2, 0, 3,
            5, 7, 4, //tras
            7, 5, 6,
            8, 9, 10, //esquerda
            10, 11, 8,
            14, 13, 12, //direita
            12, 15, 14,
            16, 17, 18, //cima
            18, 19, 16,
            23, 22, 21, //baixo
            21, 20, 23

        ];
        this.normals = [
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0
        ];
        /*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

        this.texCoords = [
            2 / 3 - this.x, 0.25 - this.y,
            1 / 3 + this.x, 0.25 - this.y,
            1 / 3 + this.x, 0 + this.y,
            2 / 3 - this.x, 0 + this.y,
            2 / 3 - this.x, 0.5 + this.y,
            1 / 3 + this.x, 0.5 + this.y,
            1 / 3 + this.x, 0.75 - this.y,
            2 / 3 - this.x, 0.75 - this.y,
            1 / 3 - this.x, 0.25 + this.y,
            0 + this.x, 0.25 + this.y,
            0 + this.x, 0.5 - this.y,
            1 / 3 - this.x, 0.5 - this.y,
            2 / 3, 0.25+this.y,
            1, 0.25+this.y,
            1, 0.5-this.y,
            2 / 3-this.x, 0.5-this.y,
            2 / 3-this.x, 0.25+this.y,
            1 / 3+this.x, 0.25+this.y,
            1 / 3+this.x, 0.5-this.y,
            2 / 3-this.x, 0.5-this.y,
            2 / 3-this.x, 1-this.y,
            1 / 3+this.x, 1-this.y,
            1 / 3+this.x, 0.75+this.y,
            2 / 3-this.x, 0.75+this.y
        ];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
    }


}

