import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  username = 'Juan';
  allowReset = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
    // this.allowReset = (<HTMLInputElement>event.target).value !== '';
    if ( (<HTMLInputElement>event.target).value === '') {
      this.allowReset = false;
    } else {
      this.allowReset = true;
    }
  }

  resetUsername(){
    this.username = '';
  }

}
