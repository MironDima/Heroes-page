import { getData } from './modules/getdata'
import { changeMovies } from './modules/changeMovies'
import { render } from './modules/render'

changeMovies()
getData('dbHeroes.json').then(data => render(data));
