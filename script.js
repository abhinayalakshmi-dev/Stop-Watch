let display= document.getElementById("display");
let start =document.getElementById("start");
let reset=document.getElementById("reset");
let pause=document.getElementById("pause");
let milliseconds=0; seconds=0; minutes=0; hours=0;
let timeref;
start.onclick=function(){
    timeref=setInterval(updateTime,10)
}

function updateTime(){
    milliseconds=milliseconds+10;
    if(milliseconds==1000){
        seconds=seconds+1;
        milliseconds=0;
        if(seconds==60){
            minutes=minutes+1;
            seconds=0;
            if(minutes==60){
                hours=hours+1;
                minutes=0;
            }
        }
    }
    let ms,s,m,h;
if(hours<10){
    h='0'+hours;
}
else{
    h=hours;
}
if(minutes<10){
    m='0'+minutes;
}
else{
    m=minutes;
}
if(seconds<10){
   s='0'+seconds;
}
else{
    s=seconds;
}
if (milliseconds < 10) {
    ms = '0' + milliseconds;
} else if (milliseconds < 100) {
    ms = '00' + milliseconds;
}


else{
    ms=milliseconds;
}
 
display.innerHTML =`${h} :${m} :${s} :${ms}`

    
}

pause.onclick=function(){
    clearInterval(timeref);

}
reset.onclick=function(){
    clearInterval(timeref);
    milliseconds=0;
    seconds=0;
    hours=0;
    minutes=0;
    display.innerHTML ="00 : 00 : 00 : 00";
}