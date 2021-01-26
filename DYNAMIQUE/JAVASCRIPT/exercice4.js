/*Exercice 4 : 
  total d'une commande
  A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :
  TOT = ( PU * QTECOM )
  la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
  le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
  la valeur minimale du port à payer est de 6 €
  Testez tous les cas possibles afin de vous assurez que votre script fonctionne.
  Ci-dessous, un jeu de tests :
  Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
  Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
  Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
  Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €*/
  
var PU = window.prompt("Entrez un prix unitaire");
var QTECOM = window.prompt("Entrez une quantité à commander");
var TOT = PU*QTECOM;
var TOT2;
var TOT3;

// Calcul du total avec toutes les remises posssibles
// 1°cas :
if (TOT >=100 && TOT <=200) {
  TOT2 = TOT*0.95;
}
else if(TOT > 200){
  TOT2 = TOT*0.9;
}
else{
  TOT2 = TOT;
};
// En incluant les frais de port maintenant
if (TOT2 > 500) {
  TOT3 = TOT2;
}
else{
  TOT3 = TOT2*1.02;
  if (TOT3 < TOT2 +6) {
    TOT3 = TOT2 +6;
  };
};
console.log("Le prix à payer sera de : " + TOT3 + "€");