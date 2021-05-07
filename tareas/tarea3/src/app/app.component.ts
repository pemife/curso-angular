import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
      .fondo {
        color: white;
      }
  `]
})
export class AppComponent {
  display = false;
  clicks = [];
  nClicks = 1;

  onButtonPress() {
    this.display=!this.display;z
    this.clicks.push([ this.nClicks, 'Click - ' + this.nClicks + ' - ' + new Date()]);
    this.nClicks++;
    // console.log(this.clicks);
  }

  getColor(numero) {
    let color: Array<String>;
    color['fondo'] = numero > 5 ? 'blue' : 'white';
    color['letra'] = numero > 5 ? 'white' : 'black';
    console.log(color);
    return color;
  }
}
