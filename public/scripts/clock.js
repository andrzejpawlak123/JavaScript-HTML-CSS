//<!--  clock with pics 0-9   -->
var image = [];
var time = 1000;
var s = 0; //second
var m = 0; //minute
var h = 0; //hour


image[0] = 'images/L0.jpg';
image[1] = 'images/L1.jpg';
image[2] = 'images/L2.jpg';
image[3] = 'images/L3.jpg';
image[4] = 'images/L4.jpg';
image[5] = 'images/L5.jpg';
image[6] = 'images/L6.jpg';
image[7] = 'images/L7.jpg';
image[8] = 'images/L8.jpg';
image[9] = 'images/L9.jpg';
image[10] = 'images/L0.jpg';



function clock() {
    var t = new Date();

    document.hour.src = image[Math.floor(t.getHours() / 10)];
    document.hour2.src = image[h];
    document.minute.src = image[Math.floor(t.getMinutes() / 10)];
    document.minute2.src = image[Math.floor(m)];
    document.second.src = image[Math.floor(t.getSeconds() / 10)];
    document.second2.src = image[Math.floor(s + 1)];

    if (t.getSeconds() < 10) {
        s = t.getSeconds();
    } else {
        s = t.getSeconds() % 10;
    }
    if (t.getMinutes() < 10) {
        m = t.getMinutes();
    } else {
        m = t.getMinutes() % 10;
    }
    if (t.getHours() < 10) {
        h = t.getHours();
    } else {
        h = t.getHours() % 10;
    }


    setTimeout("clock()", time);
}
window.onload = clock;