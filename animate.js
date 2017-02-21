var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var requestId;
var logo = new Image();
ctx.fillStyle = "#ff0000";
logo.src = "logo_dvd.jpg";

var animate = function(){
  window.cancelAnimationFrame( requestId );
  var radius = 1;
  var grow;

  var drawDot = function() {
    ctx.clearRect(0, 0, 500, 500); //clear each time the frame refreshes
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();

    if (radius >= 250) { grow = false; }
    if (radius <= 0) {grow = true;}
    if (grow) { radius ++; }
    else { radius --;}

  requestId = window.requestAnimationFrame(drawDot);
}
  drawDot();
};


var animateDVD = function(){
  window.cancelAnimationFrame(requestId);
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var right = true;
    var down = true;

  var movedvd = function(){
    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(logo, x, y, 150 , 100);

    if (x >= 350) { right = false; }
    else if (x <= 0) { right = true; }
    if (y <= 0) { down = true; }
    else if (y >= 400) { down = false; }

    if (right) { x++; }
    else  { x--; }
    if (down) { y++; }
    else { y--; }

    requestId = window.requestAnimationFrame(movedvd);
  }
  movedvd();
}

var stopIt = function() { window.cancelAnimationFrame(requestId);}

start.addEventListener("click", animate);
