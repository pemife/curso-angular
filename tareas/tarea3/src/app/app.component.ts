import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  clicks = [];
  nClicks = 1;

  onButtonPress() {
    this.display=!this.display
    this.clicks.push('Click - 1 - ' + new Date() )
  }
}
