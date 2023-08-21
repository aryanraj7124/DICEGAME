var randomno1=Math.floor(Math.random()*6)+1;

var randomdiceimg="dice"+randomno1+".png";

var finalimg1="images/"+randomdiceimg;  
var img1=document.querySelectorAll("img")[0].setAttribute("src",finalimg1);    

var randomno2=Math.floor(Math.random()*6)+1;

var randomdiceimg2="dice"+randomno2+".png";

var finalimg2="images/"+randomdiceimg2;  

var img2=document.querySelectorAll("img")[1].setAttribute("src",finalimg2);  
  
if(randomno1>randomno2)
{
document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomno1<randomno2)
{
document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else {
document.querySelector("h1").innerHTML="MATCH DRAW RETHROW DICE";
}