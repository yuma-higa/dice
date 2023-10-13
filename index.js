var randomNum1=Math.floor((Math.random() * 6) + 1);
var randomDaiceImg="dice"+randomNum1+".png";
var randomImg="./images/"+randomDaiceImg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImg);

var randomNum2=Math.floor((Math.random()*6)+1);
var randomImgSource2 = "./images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!"
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!"
    
}
else{
    document.querySelector("h1").innerHTML="draw!!"
}