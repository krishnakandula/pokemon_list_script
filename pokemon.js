class Pokemon {
	constructor(id, name, type1, type2){
		this._id = id;
		this._name = name;
		this._type1 = type1;
		this._type2 = type2;
	}
	
	get id () {
		return this._id;
	}

	set id (id) {
		this._id = id;
	}
	
	get name () {
		return this._name;
	}
	
	set name (name) {
		this._name = name;
	}
	
	get type1 () {
		return this._type1;
	}
	
	set type1 (type1) {
		this._type1 = type1;
	}
	
	get type2 () {
		return this._type2;
	}
	
	set type2 (type2) {
		this._type2 = type2;
	}
}

module.exports = {
	Pokemon
}