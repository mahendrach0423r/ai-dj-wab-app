rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
scoreRightWrist=0;
scoreLeftWrist=0;

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
 function modelLoaded()
 {
     console.log('model is intialized')
 } 

 function gotPoses(results)
     {
         if(results.length > 0)
         {
             console.log(results);
             rightWristX=results[0].pose.rightWrist.x;
             rightWristY=results[0].pose.rightWrist.y;
             console.log("rightwristx = "+rightWristX+"rightwristy = "+rightWristY);
             leftWristX=results[0].pose.leftWrist.x;
             leftWristY=results[0].pose.leftWrist.y;
             console.log("leftwristx = " +leftWristX+"leftwristy = "+leftWristY);
             scoreLeftWrist=results[0].pose.keypoints[9].score;
             scoreRightWrist=results[0].pose.keypoints[10].score;
             console.log("scoreleftwrist = " + scoreLeftWrist+"scorerightwrist = "+scoreRightWrist);
         }  
     }
 



song1="";
song2="";
song1_Status="";
song2_status="";

function draw()
{
    image(video,0,0,600,500);
     song1_Status=song1.isPlaying();
     song2_status=song2.isPlaying2();
    fill("#FF0000");
    stroke("#FF0000");
     
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song1.stop()
        if (song2_status== false)
        {
            song2.play();
            
        }

    }
    

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY ,20);
        song2.stop()
        if (song1_status== false)
        {
            song1.play();
            
        }
       

         






    }

    function isPlaying()
    {
          song1_Status=false;
    }
    function isPlaying2()
    {
        song2_status=false;
    }
   
    
}

function preload()
{
    song1=loadSound("Deva Deva.mp3");
    song2=loadSound("Inthandham.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop()
{
    song.stop();
}

function pause()
{
    song.pause();
}

