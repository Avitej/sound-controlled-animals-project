function startClassification () {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l29H77W-3/', modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}

function gotResult (error, results) {
    console.log('got result')
}