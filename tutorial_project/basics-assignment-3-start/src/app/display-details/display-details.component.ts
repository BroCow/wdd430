import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {


  // Create boolean variable for paragraph displayed
  displayP = false;
  // Creat array to log button clicks
  btnClicks = [1];
  // Create variable for logging button clicks with timestamp
  btnClicked = 1;
  clickStamp = [];


  constructor() { }

  ngOnInit(): void {
  }

  
  
  

  // Add method to toggle display of p, log each click.
  onClick(){
    if(this.displayP === true){
      this.displayP = false;
    } else {
      this.displayP = true;
    }

    this.btnClicks.push(this.btnClicks.length + 1);
    this.clickStamp.push(new Date());
    

  }
 
}
