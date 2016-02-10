window.addEventListener("load", function() {

    //variables
    var titreDate = document.getElementById("date");

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
    
    
    var boutonAjouter = document.getElementById("boutonAjouter");
    //Lorsque l'on clique sur le bouton
    boutonAjouter.addEventListener("click", function(){
        
        var modeleAlarme = document.getElementById("modeleAlarme");
        var nouvelleAlarme = modeleAlarme.cloneNode(true);

        //On l'insère à la fin de la liste des alarmes
        //var listeAlarme = document.getElementById("listeAlarme");
        modeleAlarme.parentNode.appendChild(nouvelleAlarme);

        
    }); 

});