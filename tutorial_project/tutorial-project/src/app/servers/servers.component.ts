import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /* External template */
  templateUrl: './servers.component.html',
  /* Inline template */
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  // Event binding
  serverCreationStatus = 'No server was created!';
  // Passing and Using data with event binding
  // serverName = '';

  // TWO WAY DATA BINDING
  serverName = 'testServer1';

  // ngIf
  serverCreated = false;

  // ngFor
  servers = ['Testserver1', 'Testserver2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  //  Event binding
  onCreateServer() {
    // this.serverCreationStatus = 'Server was created!';

    //  ngIf - change serverCreated to true when button clicked
    this.serverCreated = true;

    // ngFor
    this.servers.push(this.serverName);

    // COMBINING ALL FORMS OF DATA BINDING
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
 