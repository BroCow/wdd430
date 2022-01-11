import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /* External template */
  // templateUrl: './servers.component.html',
  /* Inline template */
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
