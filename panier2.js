var searchParams = new URLSearchParams(window.location.search);

var id= searchParams.get("id") 
console.log(id)

	let panier = localStorage.getItem('panier')
		if(panier === null){
			panier = [];
		}
		//Ajouter un article
		else{
			panier = JSON.parse(panier);
			console.log(panier)
			var articleSupp = document.getElementById('firstbox');
			for(var i = 0; i < panier.length; i++){
			articleSupp.innerHTML +=` <div class="box_1"><img src="${panier[i].image}">
            	<div class="box_2"> <p class="price_name">${panier[i].price}€- ${panier[i].name}</p> </br>
             	<p>Ouverture objectif - "${panier[i].lense}"</p> </br>
				</div>
				<button onclick="remove('${i}')" type="button" class="alert"></button>
				</div>`;
			}
		}



//Retirer un article
var remove = function(index){
	panier.splice(index, 1)
	console.log(panier)
	articleSupp.innerHTML= "";
	for(var i = 0; i < panier.length; i++){
			articleSupp.innerHTML +=` <div class="box_1"><img src="${panier[i].image}">
            	<div class="box_2"> <p class="price_name">${panier[i].price}€- ${panier[i].name}</p> </br>
             	<p>Ouverture objectif - "${panier[i].lense}"</p> </br>
				</div>
				<button onclick="remove('${i}')" type="button" class="alert"></button>
				</div>`;
	}

	localStorage.setItem('panier', JSON.stringify(panier))
}


/*Formulaire*/
var loadEvent = function(){
	document.forms['inscription'].addEventListener("submit", (e)=> {
	
	var erreur= document.getElementById("erreur");
	console.log(erreur)
	var inputs = document.getElementsByTagName("input");

	for(var i = 0; i < inputs.length; i++ ){
		if(!inputs[i].value){
			erreur.innerHTML= "Veuillez compléter tous les champs";
		}
	}
	if(erreur){
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else{
	alert('Formulaire envoyé !');
	}
})
}


//Additionner prix total

const paiement = document.getElementById('paiement');
	paiement.innerHTML+= `
	<div> <h2>TOTAL</h2></div>
	<div> <p>Sous total € </br>
	</br>
	Livraison </p> </div>
	<button type="button"> Valider </button>`;

var caract = document.getElementById('caract');
var caracte = document.getElementById('caracte');



var allId = panier.map((produit)=>{
	return produit.id
})

console.log(allId)

var dataToSend = { contact: {firstName: "Olivier", 
							lastName: "Malahel",
							address: "5 rue de l'épave", 
							city: "Paris", 
							email: "omalahel@gmail.com" },
					products: allId

}

fetch('http://localhost:3000/api/cameras/order', {
    method: 'post',
    headers: { "Content-type": "application/JSON; charset=UTF-8"},
    body: JSON.stringify(dataToSend)})
    .then(response => response.json())
	.then(response =>{
	console.log(response)})
	.catch(error => console.log(error));



