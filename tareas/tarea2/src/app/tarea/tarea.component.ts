import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})

export class TareaComponent implements OnInit {
  username: string = '';
  allowReset = this.username !== ''

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUsername(event: Event){
    this.allowReset = this.username !== '';
    this.username = (<HTMLInputElement>event.target).value;
    // this.allowReset = (<HTMLInputElement>event.target).value !== '';
    console.log(this.allowReset);
  }

  resetUsername(){
    this.username = '';
    this.allowReset = false;
  }

}
