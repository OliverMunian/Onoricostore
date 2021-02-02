/*Formulaire*/
var formulaire = document.getElementById('inscription')

formulaire.addEventListener("submit", function(e) {

	var erreur;

	var inputs = document.getElementsByTagName('input');

	for(var i = 0; i < inputs.length; i++){

	//Stocker les saisies dans le session storage
	sessionStorage.setItem("Prenom", document.querySelector('#prenom').value);
	
		if(!inputs[i].value){
			erreur = "Veuillez renseigner tous les champs"
		}
	}
	if(erreur){
		e.preventDefault();
		document.getElementById('erreur').innerHTML = erreur;
		return false;
	} else{
		alert('Formulaire envoyé !');
	}
	
})