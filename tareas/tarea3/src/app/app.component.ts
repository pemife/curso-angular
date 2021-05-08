import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
      .clicks {
        color: white;
      }
  `]
})
export class AppComponent {
  display = false;
  clicks = [];

  onButtonPress() {
    this.display=!this.display;
    this.clicks.push([ this.clicks.length+1, 'Click - ' + this.clicks.length + ' - ' + new Date()]);
    // console.log(this.clicks);
  }

  // getColor(numero) {
  //   let color: Array<String>;
  //   color['fondo'] = numero >= 5 ? 'blue' : 'white';
  //   color['letra'] = numero > 5 ? 'white' : 'black';
  //   console.log(color);
  //   return color;
  // }
}
