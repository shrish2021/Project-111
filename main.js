Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90,
});

camera = document.getElementById("webcam");

Webcam.attach("#webcam");

function takeSnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='caputuredImg' src='"+data_uri+"'>";
    });
}

console.log("ml5 version:", ml5.version);

classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0KhNGJBUU/model.json", modelReady);

function modelReady()
{
    console.log("Model Ready!");
}