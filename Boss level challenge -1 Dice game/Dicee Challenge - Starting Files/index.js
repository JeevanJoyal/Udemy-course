var n1 = Math.random();
n1 = Math.floor(n1*6);

var n2 = Math.random();
n2 = Math.floor(n2*6);

var img1 = "images/dice"+ (n1+1) +".png"
var img2 = "images/dice"+ (n2+1) +".png"
if (n1 > n2){
    document.querySelector("h1").innerHTML = "Player 1 WINS";
} else if (n1 == n2){
    document.querySelector("h1").innerHTML = "NO ONE WINS";
} else{
    document.querySelector("h1").innerHTML = "Player 2 WINS";
}
console.log(img1,img2)
document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);