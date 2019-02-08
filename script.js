
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";
import images from "./img/*.jpg";  //

/*
  Put the JavaScript code you want below.
*/
let imgTag = document.querySelector('#theImg');

//let imgArray = [];
/*
let rand = (Math.floor(Math.random() * 13));
console.log(rand);
function displayRandomCat() {
  imgTag.src = images["cat"+rand];
}
setInterval (displayRandomCat, 1000);
*/
let compteur = 1
function cycle() {
  console.log("la f s'est lancée");
  if (compteur < 13) {
    imgTag.src = images["cat"+compteur];
    compteur++
  } else if (compteur > 12)   {
    compteur = 1;
  }
}
setInterval (cycle, 1000)
