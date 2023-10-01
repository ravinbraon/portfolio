const doc = document;
const myImg = doc.getElementById("moon");

myImg.addEventListener("click",function(){
  if (myImg.src.endsWith('moon.png')) {
        myImg.src = 'assets/images/lamp.png';
        myImg.alt = "Image Lampe";
        myImg.style.width = "50px"
        myImg.style.height = "auto";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

    } else {
        myImg.src = 'assets/images/moon.png';
        myImg.alt = "Image lune";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
    }

})
