/*영상을 재생하는 구간*/
var imgNum = 1;
var img = new Image()
var canvas = document.getElementById('background');
var context = canvas.getContext('2d');

var root = "./res/img/";
var maximgNum = 350;

var count = 0;
function render(){
    if(count>=maximgNum)return;
    count+=1;
    img.src = root+count+'.jpg';    
    sleep(10);
}
function sleep(ms){
    const wakeUpTime = Date.now() + ms;
    while(Date.now() < wakeUpTime){}
}
img.src = root+"1.jpg";
img.addEventListener('load', function(e) {
    // context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(img,0,0);
    render();
});