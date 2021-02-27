var imgNum = 1;         //  "res/img/*.jpg" 파일명(번호)
var img = new Image();  //이미지 데이터를 저장하는 변수
var canvas = document.getElementById('background'); //사진을 넣을 canvas id를 가져온다.
var scrollYPos = 0;     //스크롤 위치값과 사진을 매칭시켜주는 변수입니다.
var ctx = canvas.getContext('2d');
var ds = document.scrollingElement;
var maxHeight = ds.scrollHeight-ds.clientHeight;
var maximgNum = 235;   //준비한 이미지의 갯수
var root = "./res/img/";//이미지 경로
img.src=root+"1.jpg";

window.addEventListener('scroll',function(e){
    scrollYPos = Math.round((window.scrollY/maxHeight) *maximgNum);
    if(scrollYPos==0)scrollYPos=1;//첫이미지
    if(scrollYPos > maximgNum)scrollYPos=maximgNum;//지정한 수를 못넘게
    img.src = root+scrollYPos+".jpg";
});
img.addEventListener('load', function(e){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.drawImage(img,0,0,ctx.canvas.width,ctx.canvas.height);
});

