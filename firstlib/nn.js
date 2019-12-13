function sigmoid(x) {
    return 1 / (1 + Math.exp(x));
}

class NeuralNetwork{

    constructor(input_nodes, hidde_nodes, output_nodes) {
        this.input_nodes = input_nodes;
        this.hidde_nodes = hidde_nodes;
        this.output_nodes = output_nodes;

        // Weights for the nodes
        this.weights_ih = new Matrix(this.hidde_nodes, this.input_nodes);
        this.weights_ho = new Matrix(this.output_nodes, hidde_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        // Bias for the nodes
        this.bias_h = new Matrix(this.hidde_nodes, 1);
        this.bias_o = new Matrix(this.output_nodes, 1);
        this.bias_h.randomize();
        this.bias_o.randomize();
    }

    feedforward(input_array) {
        // Lots of matrix math

        // Generating hte hidden Outputs
        // Input to hidden
        let inputs = Matrix.fromArray(input_array)
        // H = (W^IH_ij * I_i + B^H)
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        hidden.add(this.bias_h);
        hidden.map(sigmoid);
        // Activation function

        // Generating the output's output
        // Hidden to output
        // O = o(W^HO_ij * H + B^O)
        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        // Sending the data back to the caller
        return output.toArray();
    }

    train(inputs, targets) {
        // e_h1 = w1 / w1 + w2 * E1
        // e_h2 = w2 / w1 + w2 * E2

        let outputs = this.feedforward(inputs);

        // Convert array to matrix object
        outputs = Matrix.fromArray(outputs);
        targets = Matrix.fromArray(targets);

        // Calculate the error
        // Error = TARGETS - OUTPUTS
        let output_errors = Matrix.subtract(targets, outputs);
        
        // Calculate the hidden layer error
        let weights_ho_t = Matrix.transpose(this.weights_ho);
        let hidden_errors = Matrix.multiply(weights_ho_t, output_errors); // w11 * e1 + w21 * e2
    }

    /*
    y = mx + b
    dm = lr * x * error
    db = lr * error
    */

    

}