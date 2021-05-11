// # Instructions :
// >*Mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*
// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)

//exo1
let exo1 = document.getElementsByClassName('tartine')[0].innerText;
console.log('exo1:');
console.log(exo1);

//exo2
let exo2 = document.getElementById('toast').innerText;
console.log('exo2:');
console.log(exo2);

//exo3
let exo3 = document.getElementsByClassName('tartine')[1]
console.log('exo3:');
console.log(exo3);