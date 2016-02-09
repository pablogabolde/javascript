window.addEventListener("load", function (){

  
  var titreDate = document.getElementById("date");


  function changerHeure(){
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var seconde = date.getSeconds();
    
    //On rajoute un 0 devant si c'est inf à 10
    if(heure < 10){
      heure = "0" + heure;
    }
    if(minute < 10){
      minute = "0" + minute;
    }
    if(seconde < 10){
      seconde = "0" + seconde;
    }

    titreDate.textContent = heure + ":" + minute + ":" + seconde;

    setTimeout(changerHeure, 1000);
  }
  
  changerHeure();


  
});