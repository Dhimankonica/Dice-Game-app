// var randomImage = newarray(images/dice1.png,images/dice2.png,images/dice3.png,images/dice4.png,images/dice5.png,images/dice6.png)
    var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

// console.log( randomNumber1);  
// console.log(randomImage.length);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


var result;
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="Player1 Wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector(".container h1").innerHTML="Player2 Wins";
}else{
    document.querySelector(".container h1").innerHTML="Draw!";
    }




