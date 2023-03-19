// déclaration du document ainsi que le bouton et l'image avec leur id
const doc = document;
const myButton = doc.getElementById("btn");
const myImage = doc.getElementById("img");

// Méthode fetch avec la promise 
myButton.addEventListener("click",function(){ // detecter un appuie sur le bouton
    let nombreImage = prompt("Quelle numéro d'image voulez-vous voir ?"); // Prompt pour demander la valeur à l'utilisateur stocker dans la variable nombreImage
    myImage.src = "https://images.ygoprodeck.com/images/cards/"+ nombreImage +".jpg";

    function fetchyuGiOh (){
        return fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php'); 
      } 
    
      fetchyuGiOh()
      .then((httpResponse) => {
       console.log('httpResponse :', httpResponse); 
       return httpResponse.json()
       
     })
     .then((picture)=> {
        console.log(picture);
     })
    
 })

