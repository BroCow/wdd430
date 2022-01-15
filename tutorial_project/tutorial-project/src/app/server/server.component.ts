//  A component is a class

// import 'Component' 
import { Component } from "@angular/core";
// Use 'Component' decorator
@Component({  // Pass an object to configure it - stored as metadata
    selector: 'app-server',
    templateUrl: './server.component.html', // Reference html file created in server folder
    styles: [`
    .online{
        color: white;
    }`]
}) 
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
} 