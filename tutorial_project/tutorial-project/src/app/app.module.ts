import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // This is so typescript can find it


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent, // This adds to Angular
    ServersComponent  // Added automatically by the terminal when created
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 