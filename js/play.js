/*영상을 재생하는 구간*/
var imgNum = 1;
var img = new Image()
var canvas = document.getElementById('background');
var context = canvas.getContext('2d');

var root = "./res/img/";
var maximgNum = 350;

var imgs = []; //이미지 배열

for(let i =1;i<=maximgNum;i++){
    let tmpimg = new Image();
    tmpimg.src=root+i+'.jpg';
    imgs.push(tmpimg);
    tmpimg.onload=function(){
        if(i==maximgNum){
            drawBackground();
        }
        // console.log("tmpimg loaded"+i);
    }
}

var count = 0;
function drawBackground(){
    if(count>=maximgNum){
        window.cancelAnimationFrame(loop);
        return;
    }
    context.drawImage(imgs[count],0,0);
    count+=1; 
    var loop = window.requestAnimationFrame(drawBackground);
}