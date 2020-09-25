import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  username: string;

  onUsernameUpdated(username: string) {
    this.username = username;
  }

}
