
var currentdate = new Date();
var second=currentdate.getSeconds();
var minute=currentdate.getMinutes();
var hour=currentdate.getHours();
var givesecond=0;
var giveminute=0;
var givehour=0;

var secondcontainer=document.querySelector(".seconds");
var minutecontainer=document.querySelector(".minutes");
var hourcontainer=document.querySelector(".hours");
var totalcontainer=document.querySelector(".stopwatch");
var backred = 0;
var backgreen=0;
var backblue=0;
var givered = 170;
var givegreen=121;
var giveblue=66;
var altred=0;
var altgreen=0;
var altblue=0;
var ishovering=false;

console.log("Time:" + hour + ":"+minute+":" + second);

//start
//rgb(170, 121, 66);
//end
//rgb(132, 148, 220)
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function startButtonHandler(){
  currentdate = new Date();
second=currentdate.getSeconds();
minute=currentdate.getMinutes();
hour=currentdate.getHours();

//new colors!
backred+=0.75;
 givered=170 - parseInt(backred);

backgreen+=0.33;
 givegreen=121 + parseInt(backgreen);

backblue+=4;
 giveblue=66+parseInt(backblue);

if(second===59){
  backred=0;
  backgreen=0;
  backblue=0;
}
if(second===60){
  minute+=1;
  second=0;
  if(minute===60){
    hour+=1;
  }
}
givesecond = second;
if(second<10){
  givesecond="0" + second;
}
giveminute = minute;
if(minute<10){
  giveminute="0" + minute;
}
givehour = hour;
if(hour<10){
  givehour="0" + hour;
}

if(ishovering===false){
  secondcontainer.textContent=givesecond;
  minutecontainer.textContent=giveminute;
  hourcontainer.textContent=givehour;
}else{
  secondcontainer.textContent=altred;
  minutecontainer.textContent=altgreen;
  hourcontainer.textContent=altblue;
}
console.log("Time:" + givehour + ":" + giveminute + ":" + givesecond);
console.log("Color:#" + altred + altgreen + altblue);
//for bottom bar
var barwidth = ((second/60)*400) + "px";

var barpercent = parseInt((second/60)*100) + "%";
console.log("Percentage:" + barpercent);
document.getElementById("bar").style.width=barwidth;

  document.body.style.backgroundColor = "rgb(" + givered + "," + givegreen +"," + giveblue + ")";

}//end of function

setInterval(startButtonHandler,1000);


function checkhover(){
  altred = componentToHex(givered);
  altgreen = componentToHex(givegreen);
  altblue = componentToHex(giveblue);

  if(ishovering===false){
    secondcontainer.textContent=givesecond;
    minutecontainer.textContent=giveminute;
    hourcontainer.textContent=givehour;
  }else{
    secondcontainer.textContent=altred;
    minutecontainer.textContent=altgreen;
    hourcontainer.textContent=altblue;
  }
}
setInterval(checkhover,200);
function dohover(){
  ishovering=true;
}
function donthover(){
  ishovering=false;
}

totalcontainer.addEventListener("mouseover", dohover);
totalcontainer.addEventListener("mouseleave", donthover);
