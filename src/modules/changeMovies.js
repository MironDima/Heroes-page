import { getData } from "./getdata";
import { render } from "./render";
import { filterMove } from './filterMove'
import { search } from "./search";

const changeMovies = () => {
	const blockMovies = document.querySelector('.block_movies');
	blockMovies.addEventListener('click', (e) => {
		let valueCategory = e.target.textContent;
		getData('dbHeroes.json').then(data => render(filterMove(data, valueCategory)));
	})
}

const changeSearch = () => {
	const inputSearch = document.querySelector('[type=Search]');
	const checkInput = (e) => {
		e.target.value = e.target.value.replace(/\d+/g, "");
		if(!e.target.value) return e.target.value
		e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
		return e.target.value
	}

	inputSearch.addEventListener('input', checkInput);
	inputSearch.addEventListener('input', (e) => {
		const inputValue = e.target.value.trim()
		getData('dbHeroes.json').then(data => render(search(data, inputValue)));
	})
}
export { changeMovies, changeSearch }


