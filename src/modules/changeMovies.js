import { getData } from "./getdata";
import { render } from "./render";
import { filter } from './filter'

const changeMovies = () => {
	const blockMovies = document.querySelector('.block_movies');
	blockMovies.addEventListener('click', (e) => {
		let valueCategory = e.target.textContent;
		console.log(valueCategory);
		getData('dbHeroes.json').then(data => render(filter(data, valueCategory)));
	})
}
export { changeMovies }


