import { render } from "./render"

const filter = (heroes, value) => {

	let newData = []
	heroes.filter((heroFilter) => {
		for (let key in heroFilter.movies) {
			if (heroFilter.movies[key] === value) {
				newData.push(heroFilter)
			}
		}
	})
	console.log(newData);
	render(newData)
}

export { filter }

