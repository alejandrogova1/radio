import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episode-list-item',
  templateUrl: './episode-list-item.component.html',
  styleUrls: ['./episode-list-item.component.scss'],
})
export class EpisodeListItemComponent implements OnInit {

  @Input() episode: any;

  constructor() { }

  ngOnInit() {}

}
