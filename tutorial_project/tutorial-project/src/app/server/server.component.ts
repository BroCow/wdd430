//  A component is a class

// import 'Component' 
import { Component } from "@angular/core";
// Use 'Component' decorator
@Component({  // Pass an object to configure it - stored as metadata
    selector: 'app-server',
    templateUrl: './server.component.html' // Reference html file created in server folder
}) 
export class ServerComponent {

}