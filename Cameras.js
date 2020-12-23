fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response =>{
	console.log(response)
	
const cam = document.getElementById("cam");
cam.innerHTML = "";
response.forEach((camera, index) => {
	cam.innerHTML += `
	<div class="produit" id="prod-${index}">
		<p> ${camera.name} <br />
		${camera.price}</p>
		<img src="${camera.imageUrl}" alt="Photo d'une caméra" id="image">
		<a href="/Users/oliviermalahel/Documents/Documents/Open_classrooms/Projet_n°5/JWDP5-master/detail.html?id=${camera._id}" class="button">Voir le produit</a>
	</div>`;
  	console.log(cam.innerHTML)

})

})
.catch(error => console.log(error));
