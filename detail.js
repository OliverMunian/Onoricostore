var searchParams = new URLSearchParams(window.location.search);

var id= searchParams.get("id") 
console.log(id)

fetch("http://localhost:3000/api/cameras/"+id)
.then(response => response.json())
.then(response =>{
	console.log(response)

	var name = response.name;
	var price = response.price
	var image = response.imageUrl
	var id = response._id
	var lenses = response.lenses

	const article = document.getElementById("article");
		article.innerHTML += ` 
				<div class="article">
				<p class="name" class="police">${name}</p>
				<p class="price" class="police"> ${price}</p>
					<img src="${image}" alt="Photo d'une caméra" id="image">
					<button id="add"> ajouter au panier </button>
				<select id="caract">
				</select>
				</div>`;


	var add= document.getElementById('add')
	var caract = document.getElementById('caract')

	add.addEventListener('click', (e)=>{
		console.log('ajouter au panier!')
		if(name && lenses == name && lenses){ 
			quantité = i +1;
		}
		else{
			quantité= ""
		}

		let panier = localStorage.getItem('panier')
		if(panier === null){
			panier = [];
		}
		else{
			panier = JSON.parse(panier);
		}
		const produit = {id, name, price, image, lense: caract.value, quantité: 1};
		panier.push(produit)

		localStorage.setItem('panier', JSON.stringify(panier))

		window.location = "panier2.html"
	})


	lenses.forEach((lense) => {
		console.log(lense)
		caract.innerHTML += "<option value='" + lense + "'>" + lense + "</option>"
	})

})
.catch(error => console.log(error));
