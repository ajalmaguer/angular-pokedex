import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PokeapiService {
	test = 'hello there'
	selectedPokemon = {}

	constructor(private http: Http) { }

	getPokemon() {
		return this.http.get('http://pokeapi.co/api/v2/pokemon/')
						.map(res => res.json())
	}

	getPokeDetails(pokemon) {
		return this.http.get(pokemon.url)
						.map(res => res.json())
	}

}
