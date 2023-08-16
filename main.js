canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect (150, 143, 430, 200); 
ctx.arc(250, 210, 40 ,0 , 2 * Math. PI);
ctx.stroke();

ctx.beginPath();
 ctx.strokeStyle ="grey";
ctx. lineWidth - 1;
ctx.rect (150, 143, 430, 208);
ctx.stroke();

ctx.beginPath();
 ctx.strokeStyle ="red";
ctx.lineWidth = 5;
ctx.arc(300, 200, 40 ,8 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle = "black";
 ctx. lineWidth = 5;
ctx.arc(200, 200, 40 ,0 ,2 * Math.PI);
ctx. stroke();