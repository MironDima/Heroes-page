import { getData } from './modules/getdata'
import { changeMovies } from './modules/changeMovies'
import { render } from './modules/render'
import {changeSearch} from './modules/changeMovies'


changeMovies()
changeSearch()
getData('dbHeroes.json').then(data => render(data));
