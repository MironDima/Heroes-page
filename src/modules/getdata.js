import { render } from "./render";

const getData = () => {
	return fetch('dbHeroes.json')
		.then(response => response.json())
		.then(data => render(data))
		.catch(error => console.log(error))
}

export default getData 



