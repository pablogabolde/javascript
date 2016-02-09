window.addEventListener("load", function (){
  var tabInput = document.getElementsByTagName("input");
  var tabDivVerif = document.getElementsByClassName("divVerif");
  var age = tabInput[2];
  var id = tabInput[3];
  var mdp = tabInput[4];
  var mdp2 = tabInput[5];
  var CGU = tabInput[6];
  var bouton = tabInput[7];
  var pourcentageMdp = 0;
  //La div qui affiche le pourcentage
  var pourcentage = document.getElementById("pourcentage");
  //Les variables qui vont permettre de savoir si on peut activer le bouton ou non
  var ageOk = false;
  var idOk = false;
  var mdpOk = false;
  var mdp2Ok = false;
  var CGUOK = false;

  function testToutOk(){
    if(ageOk && idOk && mdpOk && mdp2Ok && CGUOK){
      bouton.disabled = false;
    }
    else{
      bouton.disabled = true;
    }
  }

  //On test l'âge
  age.addEventListener("change", function test(){
    //Si il n'est pas majeur ou l'age est nul
    if(age.valueAsNumber < 18 || age.value === ""){
      //On test si il y a la classe bien si oui on l'enlève
      if(age.classList.contains("bien")){
        age.classList.remove("bien");
      }
      age.classList.add("erreur");
      tabDivVerif[0].style.display = "inline";
      ageOk = false;
    }
    else{
      //On test si il y a la classe erreur si oui on l'enlève
      if(age.classList.contains("erreur")){ 
        age.classList.remove("erreur");
        tabDivVerif[0].style.display = "none";
      }
      age.classList.add("bien");
      //On dit que c'est ok
      ageOk = true;
    }
    
    
  });
  

  //On test l'ID
  id.addEventListener("keyup",function (){
    if (!/[a-z]{12,}/.test(id.value)){
      //On test si il y a la classe bien si oui on l'enlève
      if(id.classList.contains("bien")){
        id.classList.remove("bien");
      }
      id.classList.add("erreur");
      tabDivVerif[1].style.display = "inline";
      idOk = false;
    }
    else{
       //On test si il y a la classe erreur si oui on l'enlève
      if(id.classList.contains("erreur")){ 
        id.classList.remove("erreur");
        tabDivVerif[1].style.display = "none";
      }
      id.classList.add("bien");
      idOk = true;
    }
    testToutOk();
  });

  //On test mdp suffisamment fort
  mdp.addEventListener("keyup", function (){
    pourcentageMdp = 0;

    if (/[a-z]/.test(mdp.value)){
      pourcentageMdp += 20;
    }

    if (/[0-9]/.test(mdp.value)){
      pourcentageMdp += 20;
    }
   
    if (/[A-Z]/.test(mdp.value)){
      pourcentageMdp += 20;
    }
    
    if (/[^a-z0-9A-Z]/.test(mdp.value)){
      pourcentageMdp += 20;
    }


    
    //Si il n'y a pas 8 caractères
    if(!/[a-z0-9A-Z$-\/:-?{-~!"^_`\[\]]{8,}/.test(mdp.value) || pourcentageMdp < 80){
      //On traite l'erreur
      if(mdp.classList.contains("bien")){
        mdp.classList.remove("bien");
      }
      mdp.classList.add("erreur");
      tabDivVerif[2].style.display = "inline";
      mdpOk = false;
    }
    else{
      if(mdp.classList.contains("erreur")){ 
        mdp.classList.remove("erreur");
        tabDivVerif[2].style.display = "none";
      }
      mdp.classList.add("bien");
      mdpOk = true;
    }
    testToutOk();
    
    pourcentage.textContent = pourcentageMdp + "%";
  });

  //On test que les deux mots de passes correspondent
  mdp2.addEventListener("keyup", function(){

    //Si les deux mots de passes rentrés ne sont pas égaux
    if(mdp.value != mdp2.value){
      //On test si il y a la classe bien si oui on l'enlève
      if(mdp2.classList.contains("bien")){
        mdp2.classList.remove("bien");
      }
      mdp2.classList.add("erreur");
      tabDivVerif[3].style.display = "inline";
      mdp2Ok = false;
    }
    else{
       //On test si il y a la classe erreur si oui on l'enlève
      if(mdp2.classList.contains("erreur")){ 
        mdp2.classList.remove("erreur");
        tabDivVerif[3].style.display = "none";
      }
      mdp2.classList.add("bien");
      mdp2Ok = true;
    }
    testToutOk();
  });

  //On test les CGU
  CGU.addEventListener("change",function(){
    //Si elle n'est cochée
    if(!CGU.checked){
      tabDivVerif[4].style.display = "inline";
      CGUOK = false;
    }
    else{
        tabDivVerif[4].style.display = "none";
        CGUOK = true;
    }
    testToutOk();
  });

  
});