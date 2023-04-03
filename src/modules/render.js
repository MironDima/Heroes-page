import { filter } from "./filter"
const render = (data) => {
	const row = document.querySelector('.row');
	row.textContent = ''

	data.forEach(item => {
		const div = document.createElement('div');
		div.classList.add("block_heroes")
		div.innerHTML = `<div class="card">` +
			`<div class="card-header">` +
			`<span>${item.name ? item.name : "name uncnown"}</span> </div>` +
			`<img src= ${item.photo ? item.photo : "photo uncnown"} class="card-img-top" alt=${item.photo ? item.photo : "photo uncnown"}>` +
			`<li class="list-group-item"><span>Real name : </span>${item.realName ? item.realName : "realName uncnown"}</li>` +
			`<ul class="list-group list-group-flush">` +
			`<li class="list-group-item"><span>Species : </span>${item.species ? item.species : "species uncnown"}</li>` +
			`<li class="list-group-item"><span>Citizenship : </span>${item.citizenship ? item.citizenship : "citizenship available"}</li>` +
			`<li class="list-group-item"><span>Birthday : </span>${item.birthDay ? item.birthDay : "birthDay uncnown"}</li>` +
			`<li class="list-group-item"><span>Gender : </span>${item.gender ? item.gender : "gender uncnown"}</li>` +
			`<li class="list-group-item"><span>Death day : </span>${item.deathDay ? item.deathDay : "deathDay uncnown"}</li>` +
			`<li class="list-group-item"><span>Status : </span>${item.status ? item.status : "status uncnown"}</li>` +
			`</ul>` +
			`<div class="card-body movies">` +
			`<h5 class="card-title">Movies</h5>` +
			`<p class="card-text">${item.movies ? item.movies : "movies uncnown"}</p>` +
			`</div>` +
			`</div>`
			row.append(div)
	})
	

	const blockMovies = document.querySelector('.block_movies')
	blockMovies.addEventListener('click', (e) => {
		let valueCategory = e.target.textContent
		console.log(valueCategory);
		filter(data, valueCategory)

	})
}
export { render }