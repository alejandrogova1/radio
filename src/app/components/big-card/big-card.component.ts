import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-big-card',
	templateUrl: './big-card.component.html',
	styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {

	@Input() photo: string;
	@Input() hour: string;
	@Input() title: string;
	@Input() text: string;


	constructor(  ) { }

	ngOnInit() { }

	

}
