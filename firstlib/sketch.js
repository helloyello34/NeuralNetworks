

function setup() {

    let nn = new NeuralNetwork(2, 2, 2);

    let inputs = [1, 0];
    let targets = [1, 0];
    // let output = nn.feedforward(input);
    // console.log(output);

    nn.train(inputs, targets);
}

setup();


function draw() {
    
}