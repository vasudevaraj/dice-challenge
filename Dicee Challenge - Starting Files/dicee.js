var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1)+1;
//console.log(randomNumber1);

var randomDiceNumber = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceNumber;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}