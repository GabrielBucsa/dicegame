


var randomNum1=Math.floor(Math.random()*6)+1;
var randomNum2=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

if(randomNum1 > randomNum2){
    document.getElementById("title").innerHTML="👍 Player 1 WIN. Player 2 LOOSE. 🖕";
}
else{
    if(randomNum1 < randomNum2){
        document.getElementById("title").innerHTML="🖕Player 1 LOOSE. Player 2 WIN.👍";
    }
    else{
        if(randomNum1 == randomNum2){
            document.getElementById("title").innerHTML="🖕 It s a draw, fuckers. 🖕";  
        }
    }
}
