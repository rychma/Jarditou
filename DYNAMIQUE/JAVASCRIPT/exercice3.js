/*Exercice 3 : 
  recherche d'un prénom
  Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.
  Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.
  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
  (exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "];)*/

  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


  var saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
  if(tab.includes(saisie)){
    tab.splice(tab.indexOf(saisie),1);
    tab.push(" ");// la methode push renvoie la nouvelle longueur du tableau
                   // en tenant en compte l'élimination du prénom saisi
      //console.log(tab)
      alert(tab)
  }
  else{alert("erreur")} // on alerte en cas de sasie d'un prénom ne commençant pas par une majuscule
                        // à cause de la règle de respect de casse en javascript
  

  



