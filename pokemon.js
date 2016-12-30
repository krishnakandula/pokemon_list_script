class Pokemon {
	constructor(id, name, type1, type2, front_default_sprite_uri, description){
		this._id = id;
		this._name = name;
		this._type1 = type1;
		this._type2 = type2;
		this._front_default_sprite_uri = front_default_sprite_uri;
		this._description = description;
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

    get front_default_sprite_uri() {
        return this._front_default_sprite_uri;
    }

    set front_default_sprite_uri(value) {
        this._front_default_sprite_uri = value;
    }


    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}

module.exports = {
	Pokemon
}