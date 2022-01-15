import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // userNameEntered = false;
  // userNameCreationStatus = 'A new user has not yet been created!';

  userName = '';

  

  constructor() {
    
   }


  // onUserNameEntered(event: any) {
  //   this.userName = event.target.value;
  //   this.userNameCreationStatus = 'A new user has been created. Username is ' + this.userName;
  //   if(this.userName != ''){
  //     this.userNameEntered = true;
  //   } 
  // }

  resetUserName(){
    this.userName = '';
  }




  ngOnInit(): void {
  }

} 
