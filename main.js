mouthX = 0;
mouthY = 0;
function preload()
{
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 306, 306);
    image(mustache, mouthX, mouthY, 80, 35);
}



function modelLoaded() {
    console.log('PoseNet Is Loaded');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.nose.x-35;
        mouthY = results[0].pose.nose.y;
    }

}