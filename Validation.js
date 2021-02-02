var validationOwner = document.getElementById('text');
console.log(validationOwner)
var name = sessionStorage.getItem('Prenom');
console.log(name)

var numeroCommande = localStorage.getItem('numero_commande');
console.log(numeroCommande)

var price = localStorage.getItem('price')
console.log(price)

validationOwner.innerHTML=  "Votre commande d'un total de " + price + "€, a été validée ! <br/> \
" + name + ", Orinoco vous remercie pour votre commande !</br> \
Vous allez recevoir un email de confirmation dans votre boîte mail. <br />\
Votre numero de commande est le suivant : " + numeroCommande ;