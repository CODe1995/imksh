/*영상을 재생하는 구간*/
var imgNum = 1;
var img = new Image()
var canvas = document.getElementById('background');
var ctx = canvas.getContext('2d');
var root = "./res/img/";
var maximgNum = 350;
playSequence();

img.src = root+"1.jpg";

function playSequence() {
    var timer = setInterval(function() {
        console.log("Time Interval");
        
        if (imgNum >= maximgNum) {
            clearInterval(timer);//한 번만 재생하고 멈춤
        }
        
        player(imgNum);
        imgNum++;
    }, 10);
}

function player(num) {
    console.log("image num: " + num);
    img.src = root + num + ".jpg";
}

img.addEventListener('load', function(e) {
    console.log("img load");    
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.drawImage(img,0,0,ctx.canvas.width,ctx.canvas.height);
});