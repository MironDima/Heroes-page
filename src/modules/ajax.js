import { render } from "./render";
const ajax = () => {
	const getData = () => {
		const heroes = fetch('dbHeroes.json')
		heroes
			.then(response => response.json())
			.then(data => render(data))
			.catch(error => console.log(error))
	}
	getData()
}

export default ajax



