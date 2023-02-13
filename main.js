https://teachablemachine.withgoogle.com/models/mn9bSJJ0-/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mn9bSJJ0-/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {console.error(error);}
    else
    {
        console.log(results);
    }
}