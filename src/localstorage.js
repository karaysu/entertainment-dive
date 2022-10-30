class LocalStorage {
	static getItem(item) {
		return JSON.parse(localStorage.getItem(item))
	}

	static setItem(item, value) {
		console.log("value", value)
		localStorage.setItem(item, JSON.stringify(value))
	}
}

export default LocalStorage