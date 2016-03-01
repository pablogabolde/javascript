window.addEventListener("load", function(){
    var bloc = document.getElementById("bloc");  
    //On affiche le premier chapitre
    var req = new XMLHttpRequest();
    var url = "http://localhost/TP3GABOLDE_PETRINI_G1S4/json/chapitre1.json";
    
    req.open("GET", url);

    req.addEventListener("error", function(){
        console.log("Échec de chargement "+url);
    });
    
    req.addEventListener("load", function(){
        if (req.status === 200) {
            
            var data = JSON.parse(req.responseText);    
            
            var paragraphe = document.createElement("p");
            paragraphe.textContent = data.txt;
            bloc.appendChild(paragraphe);
            
            var lien = document.createElement("a");
            lien.href = data.links[0].link;
            lien.textContent =  data.links[0].txt; 
            bloc.appendChild(lien);
            
            
            
        } else {
            console.log("Erreur " + req.status);
        }
    });
    
    //On fait ça quand le hash change
    window.addEventListener("hashchange",function(){
        var req = new XMLHttpRequest();
        
        //On change le chapitre selon le h
       
        var url = "http://localhost/TP3GABOLDE_PETRINI_G1S4/json/chapitre" + window.location.hash.substring(1) + ".json";
        
        console.log(url);

        req.open("GET", url);

        req.addEventListener("error", function(){
            console.log("Échec de chargement "+url);
        });

        req.addEventListener("load", function(){
            if (req.status === 200) {

                var data = JSON.parse(req.responseText);    
                //On vide le bloc
                bloc.innerHTML = "";
                var paragraphe = document.createElement("p");
                paragraphe.textContent = data.txt;
                bloc.appendChild(paragraphe);
                
                
                //On créer un lien pour chaque lien du json
                for(var i=0; i<data.links.length ; i++){
                    var lien = document.createElement("a");
                    lien.href = data.links[i].link;
                    lien.textContent =  data.links[i].txt; 
                    bloc.appendChild(lien);
                    bloc.innerHTML += "<br\>";
                }



            } else {
                console.log("Erreur " + req.status);
            }
        });
        req.send();
    });

    req.send();
});
