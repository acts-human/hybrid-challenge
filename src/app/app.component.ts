import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  firstname: string;
  lastname: string;

  onFirstnameUpdated(firstname: string) {
    this.firstname = firstname;
  }

  onLastnameUpdated(lastname: string) {
    this.lastname = lastname;
  }
}
