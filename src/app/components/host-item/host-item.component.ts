import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-host-item',
  templateUrl: './host-item.component.html',
  styleUrls: ['./host-item.component.scss'],
})
export class HostItemComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
