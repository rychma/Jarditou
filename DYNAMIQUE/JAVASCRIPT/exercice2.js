/*Exercice 2 : 
  Table de multiplication
  Ecrivez une fonction qui affiche une table de multiplication.
  Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.
  Par exemple, TableMultiplication(7) doit afficher :
  1 x 7 = 7
  2 x 7 = 14
  3 x 7 = 21 ...*/

   // définition des variables

var X, N,resultat;


var X = parseInt(window.prompt('Saisissez un entier :'));
while (isNaN(X)) {
// on renouvèle la saisie
X = parseInt(window.prompt('Saisissez un premier nombre :'));
}
var N = parseInt(window.prompt('Saisissez le nombre de multiple :'));
  // on vérifie la saisie de l'utilisateur
// tant que la saisie n'est pas un nombre
while (isNaN(N)) {
    // on renouvèle la saisie
    N = parseInt(window.prompt('Saisissez un premier nombre :'));
}
var resultat= 0;
// début de la boucle
for (i = 0; i <= N; i++) {
    // calcul, et assignation du resultat à la variable total
    resultat = i * X;
    // affichage
    console.log(X + ' x ' + i + ' = ' + resultat);
}

