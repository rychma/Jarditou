/*Exercice 1 - 
  Calcul du nombre de jeunes, de moyens et de vieux
  Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, 
  les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans 
  (20 ans et 40 ans y compris).
  Le programme doit demander les âges successifs.
  Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.
  Donnez le programme Javascript correspondant qui affiche les résultats.*/

  var agej= 0 ;
  var agem=0;
  var agev= 0;
  var i = 0;

  do {
    age=window.prompt("Veuillez saisir votre age : " + i )
      if (age !=null && age!="") {
        i++  
      }
      if (age<20 && age>0) { agej++
          
      }
      else if (age>=20 && age <=40) { agem++          
      }
      else if (age>40 && age <=100) { agev++
          
      }
      else (age>100); { 
          " erreur"
        }
} while (age !=null && age!="");
    alert("il y a " + agej + " jeune " + "\n il y a " + agem + " moyen " + "\n il y a " + agev + " vieux ")









  
