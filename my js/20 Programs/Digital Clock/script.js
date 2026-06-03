function showTime(){

    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    document.getElementById("clock").innerHTML =
    hour + ":" + minute + ":" + second;
}

showTime();

setInterval(showTime,1000);