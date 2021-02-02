var validationOwner = document.getElementById('text');
console.log(validationOwner)
var name = sessionStorage.getItem('Prenom');
console.log(name)

var numeroCommande = localStorage.getItem('numero_commande');
console.log(numeroCommande)

validationOwner.innerHTML=  "Votre commande a été validée ! <br/> \
" + name + ", Orinoco vous remercie pour votre commande !</br> \
Vous allez recevoir un email de confirmation dans votre boîte mail. <br />\
Votre numero de commande est le suivant : " + numeroCommande ;