import { render } from "./render"
const search = (heroes, value) => {
	let newData = []
	heroes.forEach((heroesName) => {
			if (!heroesName.name) return
			if (heroesName.name.includes(value)) {
				newData.push(heroesName);
				render(newData);
			}
			else {
				render(newData);
			}
	})
	return newData
}
export { search }