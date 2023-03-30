
const render = (data) => {
	
	data.forEach(item => {
		let arr = [];
		const renderMovies = () => {
			if (item.movies) {
				item.movies.map(film => {
					arr.push(`<span>${film}</span>`)
				})
			}
		}

		renderMovies();
		const row = document.querySelector('.row');
		const div = document.createElement('div');
		div.classList.add("block_heroes")
		div.innerHTML = `<div class="card">` +
			`<div class="card-header">` +
			`<span>${item.name}</span> </div>` +
			`<img src= ${item.photo} class="card-img-top" alt=${item.name ? item.name : "no data available"}>` +
			`<ul class="list-group list-group-flush">` +
			`<li class="list-group-item"><span>Real name : </span>${item.realName ? item.realName : "no data available"}</li>` +
			`<li class="list-group-item"><span>Species : </span>${item.species ? item.species : "no data available"}</li>` +
			`<li class="list-group-item"><span>Citizenship : </span>${item.citizenship ? item.citizenship : "no data available"}</li>` +
			`<li class="list-group-item"><span>Birthday : </span>${item.birthDay ? item.birthDay : "no data available"}</li>` +
			`<li class="list-group-item"><span>Gender : </span>${item.gender ? item.gender : "no data available"}</li>` +
			`<li class="list-group-item"><span>Death day : </span>${item.deathDay ? item.deathDay : "no data available"}</li>` +
			`<li class="list-group-item"><span>Status : </span>${item.status ? item.status : "no data available"}</li>` +
			`</ul>` +
			`<div class="card-body">` +
			`<h5 class="card-title">Movies</h5>` +
			`<p class="card-text">${arr.join('')}</p>` +
			`</div>` +
			`</div>`

		row.append(div)
		
		console.log(div);
	})
}
export { render }