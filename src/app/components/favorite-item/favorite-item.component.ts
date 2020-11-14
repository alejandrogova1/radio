import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent implements OnInit {

  @Input() picture: string;
  @Input() host: string;
  @Input() name: string;
  @Input() episodes: number;

  constructor() { }

  ngOnInit() {}

}
