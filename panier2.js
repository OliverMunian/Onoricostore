var searchParams = new URLSearchParams(window.location.search);

var id= searchParams.get("id") 
console.log(id)
	

	let formulaire = document.getElementById('soumettre')
	let erreur = document.getElementById('erreur')
	let panier = localStorage.getItem('panier')
			if(panier === null){
			panier = [];
			erreur.innerHTML = "Votre panier est vide"
		}
	
		/*if(panier === null){
			panier = [];
		}*/
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
			articleSupp.innerHTML +=`<div class="box_1"><img src="${panier[i].image}">
            	<div class="box_2"> <p class="price_name">${panier[i].price}€- ${panier[i].name}</p> </br>
             	<p>Ouverture objectif - "${panier[i].lense}"</p> </br>
				</div>
				<button onclick="remove('${i}')" type="button" class="alert"></button>
				</div>`;
	}

	localStorage.setItem('panier', JSON.stringify(panier))
}



//Additionner prix total
var prix = 0;
var array =[];
for (var i= 0; i < panier.length; i++){
	prix += panier[i].price;
	var reverse = array.reverse();
	array.push(prix)
	console.log(array)
	var reverse = array.reverse();
	localStorage.setItem('price', reverse[0])
}


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
	localStorage.setItem('numero_commande',response.orderId)})
	.catch(error => console.log(error));



