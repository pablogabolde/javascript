window.addEventListener("load", function() {

    //variables
    var titreDate = document.getElementById("date");
    var boutonAjouter = document.getElementById("boutonAjouter");
    var tabTr = document.getElementsByTagName("tr");
    var tailleTabTr = tabTr.length;
    

    //Fonction pour regénérer l'heure
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

    
    // PROBLEME : Lorsque l'on ajoute une ligne, celle-ci disparait directement, de plus le clone marque  "	[object HTMLTableRowElement]" ...

    //Lorsque l'on clique sur le bouton
    boutonAjouter.addEventListener("click", function(){
        
        //on récupère l'avant dernière ligne du tableau
        var nouvelleAlarme = tabTr[0].cloneNode();

        //On l'insère avant le bouton ajouter
        tabTr[tailleTabTr-1].insertAdjacentHTML("beforebegin", nouvelleAlarme);
        
    });

});