import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'pd-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	@Input('pokemon') pokemon

	constructor() { }

	ngOnInit() {
	}

}
