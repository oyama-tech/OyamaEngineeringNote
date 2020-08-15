// Code By Webdevtrick ( https://webdevtrick.com )
function showTime(){
    var date = new Date();
    var y = date.getFullYear();
    var mm = date.getMonth();
    var d = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //var time = y + "-" mm + "-" + d + "/n" + h + ":" + m + ":" + s + " " + session;
    //var time = y  + "-" + mm + "-" + d + "\n" + h + ":" + m + ":" + s + " " + session;
    var time = h + ":" + m + ":" + s + " " + session;    

    document.getElementById("DigitalCLOCK").innerHtml = time;
    document.getElementById("DigitalCLOCK").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
