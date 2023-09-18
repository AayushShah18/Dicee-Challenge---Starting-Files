var randomNumber = Math.floor((Math.random() * 6) + 1);
var image = "images/" + "dice" + randomNumber + ".png"


document.querySelectorAll("img")[0].setAttribute("src",image);




