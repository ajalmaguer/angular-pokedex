import { Component } from '@angular/core';
import { PokeapiService } from './pokeapi.service'

@Component({
	selector: 'pd-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private pokeService: PokeapiService) { }

	getSelectedPokemon() {
		return this.pokeService.selectedPokemon
	}
	title = 'pd works!';
}
