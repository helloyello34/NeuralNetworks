

// let matrix = new Matrix(3, 2);

class Matrix {


    constructor( rows, cols ) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        for (let i = 0; i < this.rows; i++ ){
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    static fromArray(arr) {
        let m = new Matrix(arr.length, 1);
        for(let i = 0; i < arr.length; i++) {
            m.data[i][0] = arr[i];
        }
        return m;
    }

    toArray() {
        let arr = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j]);
            }
        }
        return arr;
    }

    randomize (){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.floor(Math.random() * 2 - 1);
            }
        }
    }

    
    add (n) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }  
    }

    static copyData (a) {
        let arr = [];
        for(let i = 0; i < a.data.length; i++) {
            arr[i] = [];
            for (let j = 0; j < a.data[i].length; j++) {
                arr[i][j] = a.data[i][j];
            }
        }
        return arr;
    }

    static multiply(a, b) {
        let result;
        if (b instanceof Matrix) {
            result = new Matrix(a.rows, b.cols);
            // data product
            if ( a.cols !== b.rows ) {
                console.log("Colums of a must match rows of b");
                return undefined;
            }
            
            for( let row = 0; row < result.rows; row++) {
                for ( let col = 0; col < result.cols; col++) {
                    for (let i = 0; i < a.cols; i++) {
                        result.data[row][col] += a.data[row][i] * b.data[i][col]
                    }
                }
            }
            
        } else {
            // Scalar product
            result = new Matrix(a.rows, a.cols);
            result.data = Matrix.copyData(a);
            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                    let t = result.data[i][j];
                    result.data[i][j] *= b;
                }
            }
        }
        return result;
    }

    transpose() {
        let result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[j][i] += this.data[i][j];
            }
        }

        return result;
    }

    map (fun) {
        
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = fun(this.data[i][j]);
            }
        }
    }

    print(){
        console.table(this.data);

    }

}

// matrix funcitons
//  - fill()
//  - map()
//  - reduce()
//  - filter();

// P5 / deeplearn.js