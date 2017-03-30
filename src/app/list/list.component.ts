import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
	selector: 'pd-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	pokeList = []

	constructor(private pokeService: PokeapiService) { }

	ngOnInit() {
		this.pokeService.getPokemon().subscribe(
			res => {
				console.log('res =', res)
				this.pokeList = res.results
			}, err => {
				console.log('err =', err)
			}
		)
	}

	getDetails(pokemon) {
		console.log(pokemon)
		this.pokeService.getPokeDetails(pokemon).subscribe(
			res => {
				console.log('res =', res)
				this.pokeService.selectedPokemon = res
			}, err => {
				console.log('err =', err)
			}
		)
	}

}
