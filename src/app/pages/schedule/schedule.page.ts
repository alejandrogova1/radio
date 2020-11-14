import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-schedule',
	templateUrl: 'schedule.page.html',
	styleUrls: ['schedule.page.scss']
})
export class SchedulePage {

	valueType = 'monday';
	shows: any;

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.getShows();
	}

	getShows() {
		this.shows = this.dataService.getShows();
	}

	segmentChanged(ev: any) {
		console.log(this.valueType);
	}


}
