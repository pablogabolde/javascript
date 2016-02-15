window.addEventListener("load", function() {

    //variables
    var titreDate = document.getElementById("date");
    //On récupère tous les boutons supprimés de la page
    var listeAlarme = document.getElementById("listeAlarme");
    
    //Fonction pour regénérer l'heure
    function changerHeure(){
        var date = new Date();
        var heure = ('0'+date.getHours()).slice(-2);
        var minute = ('0'+date.getMinutes()).slice(-2);
        var seconde = ('0'+date.getSeconds()).slice(-2);

        titreDate.textContent = heure + ":" + minute + ":" + seconde;
        setTimeout(changerHeure, 1000);
    }
    changerHeure();
    
    //Pour ajouter une alarme
    var boutonAjouter = document.getElementById("boutonAjouter");
    boutonAjouter.addEventListener("click", function(){
        //var modeleAlarme = document.getElementById("modeleAlarme");
        var modelesAlarme = document.getElementsByClassName("modeleAlarme");
        var tailleTabAlarme = modelesAlarme.length - 1;
        /*//On ajoute le bouton supprimé à l'alarme 1
        var boutonSuppUn = modelesAlarme[0].getElementsByClassName("boutonSuppr");
        boutonSuppUn[0].addEventListener("click", function(){
            listeAlarme.removeChild(modelesAlarme[0]);
        });*/
              
        var nouvelleAlarme = modelesAlarme[tailleTabAlarme].cloneNode(true);
       
        var boutonSupClone = nouvelleAlarme.getElementsByClassName("boutonSuppr");
        //On ajoute l'évènement supprimé a la nouvelle alarme
        boutonSupClone[0].addEventListener("click", function(){
            listeAlarme.removeChild(nouvelleAlarme);
        });
  
        
        //On l'insère à la fin de la liste des alarmes
        listeAlarme.appendChild(nouvelleAlarme);    
    }); 
    
//    var liste = document.getElementById("liste");
//    var audio = liste.getElementsByTagName("audio");
//    console.log(audio);
//    //audio.play();

});