import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.page.html',
  styleUrls: ['./host-profile.page.scss'],
})
export class HostProfilePage implements OnInit {

  @Input() host;

  constructor() { }

  ngOnInit() {
  }

 
}
